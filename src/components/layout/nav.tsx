import Card from "../common/card";
import Link from "../common/link";
import { LuMenu } from "react-icons/lu";

export default function Nav() {
  return (
    <nav className="text-md flex justify-between">
      <Card className="text-lg font-bold tracking-wide">
        <Link to="/">bSchutters</Link>
      </Card>
      <Card className="hidden gap-5 font-medium tracking-wide lg:flex">
        <Link to="/">Home.</Link>
        <Link to="/services">Services.</Link>
        <Link to="/about">About.</Link>
        <Link to="/work">Work.</Link>
        <Link to="/contact">Contact.</Link>
      </Card>
      <Card className="flex items-center justify-center lg:hidden">
        <LuMenu size={22} />
      </Card>
    </nav>
  );
}
