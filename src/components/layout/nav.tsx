import { useEffect, useState } from "react";
import Card from "../common/card";
import Link from "../common/link";
import { LuChevronUp, LuMenu } from "react-icons/lu";

export default function Nav() {
  const [opacity, setOpacity] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <nav className="text-md z-20 flex w-full justify-between lg:fixed lg:pr-[200px]">
      <Card className="text-lg font-extrabold tracking-wide">
        <Link to="/">bSchutters</Link>
      </Card>
      <Card className="hidden gap-5 font-bold tracking-wide lg:flex">
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
        className={`bg-primary/40 fixed bottom-10 right-10 rounded-full p-2 backdrop-blur-xl transition-all ease-in-out opacity-${opacity} duration-300`}
        onClick={scrollToTop}
      >
        <LuChevronUp size={30} />
      </div>
    </nav>
  );
}
