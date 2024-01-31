import Footer from "./footer";
import Nav from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-backg flex min-h-screen max-w-full flex-col gap-24 px-[50px] py-[25px] text-white lg:px-[100px] lg:py-[50px]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
