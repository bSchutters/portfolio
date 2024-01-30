import Card from "../common/card";
import Link from "../common/link";

export default function Nav() {
  return (
    <nav className="flex justify-between text-xl">
      <Card className="text-lg font-bold tracking-wide">
        <Link to="/">Schutters Bryan.</Link>
      </Card>
      <Card className="flex gap-5 font-medium tracking-wide">
        <Link to="/">Home.</Link>
        <Link to="/services">Services.</Link>
        <Link to="/about">About.</Link>
        <Link to="/work">Work.</Link>
        <Link to="/contact">Contact.</Link>
      </Card>
    </nav>
  );
}
