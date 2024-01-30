import Footer from "./footer";
import Nav from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex size-full min-h-screen flex-col gap-24 bg-black px-[100px] py-[50px]  text-white">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
