import { useCallback, useEffect, useState } from "react";
import { items } from "./items";
import Layout from "../../components/layout/layout";
import Work from "../../components/common/work";

export default function WorkPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const filters = [
    "Use cases",
    "Web design",
    "Web app",
    "Branding",
    "Social media",
  ];

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterItems = useCallback(() => {
    if (selectedFilters.length > 0) {
      const tempItems = items.filter((item) =>
        item.category.some((category) => selectedFilters.includes(category)),
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...items]);
    }
  }, [selectedFilters]);

  useEffect(() => {
    filterItems();
  }, [filterItems]);

  return (
    <Layout>
      <div className="flex flex-wrap gap-2 font-bold lg:w-1/2">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`flex-grow rounded-full px-4 py-2 ${selectedFilters.includes(category) ? "bg-secondary" : "bg-primary"}`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col gap-10 lg:gap-20">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item flex w-full justify-center">
            <Work
              to={item.to}
              img={item.img}
              title={`${item.name}`}
              desc={item.desc}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
