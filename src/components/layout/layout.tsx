import Footer from "./footer";
import Nav from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex size-full min-h-screen flex-col gap-24 bg-black px-[50px] py-[25px] text-white lg:px-[100px]  lg:py-[50px]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
