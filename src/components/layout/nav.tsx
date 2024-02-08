import { useEffect, useState } from "react";
import Card from "../common/card";
import Link from "../common/link";
import { LuChevronUp, LuMenu } from "react-icons/lu";
import logo from "../../assets/bS.svg";

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

  //Burger nav

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-anim text-md relative z-20 flex w-full justify-between">
      <div className="flex w-full flex-col gap-8 rounded-xl bg-primary/60 p-5 backdrop-blur-lg">
        <div className="flex justify-between">
          <Link to="/">
            <img src={logo} alt="" className="w-5" />
          </Link>
          <LuMenu size={22} onClick={handleClick} />
        </div>
        <div className={isOpen ? "flex flex-col gap-3" : "hidden"}>
          <Link to="/">Home.</Link>
          <Link to="/services">Services.</Link>
          <Link to="/about">About.</Link>
          <Link to="/work">Work.</Link>
          <Link to="/contact">Contact.</Link>
        </div>
      </div>

      <Card className="font hidden gap-5 tracking-wide lg:flex">
        <Link to="/">Home.</Link>
        <Link to="/services">Services.</Link>
        <Link to="/about">About.</Link>
        <Link to="/work">Work.</Link>
        <Link to="/contact">Contact.</Link>
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
