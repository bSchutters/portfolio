import { useEffect, useState } from "react";
import Card from "../common/card";
import Link from "../common/link";
import { LuChevronUp, LuMenu } from "react-icons/lu";

export default function Nav() {
  const [opacity, setOpacity] = useState("opacity-0");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setOpacity("opacity-100");
      } else {
        setOpacity("opacity-0");
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <nav className="text-md z-20 flex w-full justify-between">
      <Card className="text-lg  tracking-wide">
        <Link to="/">bSchutters</Link>
      </Card>
      <Card className="font hidden gap-5 tracking-wide lg:flex">
        <Link to="/">Home.</Link>
        <Link to="/services">Services.</Link>
        <Link to="/about">About.</Link>
        <Link to="/work">Work.</Link>
        <Link to="/contact">Contact.</Link>
      </Card>
      <Card className="flex items-center justify-center lg:hidden">
        <LuMenu size={22} />
      </Card>

      <div
        className={`fixed bottom-10 right-10 rounded-full bg-primary/40 p-2 backdrop-blur-xl transition-all ease-in-out ${opacity} duration-300 hover:cursor-pointer`}
        onClick={scrollToTop}
      >
        <LuChevronUp size={30} />
      </div>
    </nav>
  );
}
