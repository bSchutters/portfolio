import { LuChevronRight } from "react-icons/lu";
import Card from "../common/card";
import Work from "../common/work";
import Link from "../common/link";

export default function Works() {
  return (
    <div className="works-test flex flex-col items-center gap-28">
      <Work
        title="Dayread"
        desc="Social network concept"
        to="/work/dayread"
        img="./dayread_iphone_mockup.jpg"
        wip={false}
      />
      <Work
        title="Popcorn Palace"
        desc="Rooftop cinema concept"
        to="/work/popa"
        img="./popa_mb_mockup.jpg"
        wip={true}
      />
      <Work
        title="Smile Coffee"
        to="/work/smilecoffee"
        desc="Coffee shop concept"
        img="./smilecoffee_mac_mockup.jpg"
        wip={true}
      />
      <Link to="/work">
        <Card className="flex items-center gap-4">
          <p>View more work</p>
          <LuChevronRight />
        </Card>
      </Link>
    </div>
  );
}
