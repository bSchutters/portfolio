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
        img="/imgs/dayread_iphone_mockup.jpg"
        wip={false}
        external={true}
        tags="Web app"
      />
      <Work
        title="Popcorn Palace"
        desc="Rooftop cinema concept"
        to="/work/popa"
        img="/imgs/popa_mb_mockup.jpg"
        wip={true}
        tags="Web app"
        external={true}
      />
      <Work
        title="Smile Coffee"
        to="/work/smilecoffee"
        desc="Coffee shop concept"
        img="/imgs/smilecoffee_mac_mockup.jpg"
        wip={true}
        external={true}
        tags="Web app"
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
