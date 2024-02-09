import { useCallback, useEffect, useState } from "react";
import { items } from "./items";
import Layout from "../../components/layout/layout";
import Work from "../../components/common/work";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function WorkPage() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".tag-anim",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.3 },
      "-=0.6",
    );
    tl.fromTo(
      ".item",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.3 },
      "-=0.8",
    );
    tl.fromTo(".footer-anim", { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(items);

  console.log("items", items);

  const filters = [
    // "Use cases",
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
            className={`tag-anim flex-grow rounded-full px-4 py-2 ${selectedFilters.includes(category) ? "bg-secondary" : "bg-primary"} transition-colors ease-in-out`}
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
              wip={item.wip}
              tags={item.category.join(", ")}
              external={item.external}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
