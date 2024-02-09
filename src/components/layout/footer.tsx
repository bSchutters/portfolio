import Card from "../common/card";
import Link from "../common/link";

export default function Footer() {
  return (
    <footer className="footer-anim flex flex-col gap-5 lg:flex-row">
      <div className="order-last flex w-full items-end justify-between lg:order-first lg:w-1/2 lg:justify-start">
        <p className="lg:hidden">bSchutters.</p>
        <p>All rights reserved. © 2024 </p>
      </div>

      <div className="flex w-full flex-col gap-5 lg:w-1/2 ">
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <Card className="flex w-full flex-col gap-2 lg:w-1/2">
            <h3 className="mb-4 font-playfair text-lg font-bold italic">
              Navigate
            </h3>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </Card>
          <Card className="flex w-full flex-col gap-2 lg:w-1/2">
            <h3 className="mb-4 font-playfair text-lg font-bold italic">
              Featured Work
            </h3>
            <a
              href="https://dayread.lou-va.com"
              className="text-secondary transition-all ease-in-out hover:text-white"
            >
              Dayread
            </a>
            <a
              href="https://popa.lou-va.com"
              className="text-secondary transition-all ease-in-out hover:text-white"
            >
              Popcorn Palace
            </a>
            <a
              href="#"
              className="text-secondary transition-all ease-in-out hover:cursor-not-allowed"
            >
              Smile Coffee
            </a>
          </Card>
        </div>
        <Card className="flex items-center justify-between">
          <h3 className="font-playfair text-lg font-bold italic">Links</h3>
          <div className="flex gap-5">
            <a
              href="https://linkedin.com/in/bryan-schutters"
              target="_blank"
              className="text-secondary transition-all ease-in-out hover:text-white"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/bschutters"
              target="_blank"
              className="text-secondary transition-all ease-in-out hover:text-white"
            >
              Github
            </a>
            <a
              href="#"
              // target="_blank"
              className="text-secondary transition-all ease-in-out hover:cursor-not-allowed"
            >
              Dribbble
            </a>
          </div>
        </Card>
      </div>
    </footer>
  );
}
