import { useEffect } from "react";
import Cursor from "../common/cursor";
import Footer from "./footer";
import Nav from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Cursor />
      <div className="flex min-h-screen max-w-full flex-col gap-24 bg-backg px-[25px] py-[25px] text-white lg:px-[100px] lg:py-[50px]">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
}
