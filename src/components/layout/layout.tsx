interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="size-full min-h-screen bg-black px-[100px] py-[50px] text-white">
      {children}
    </div>
  );
}
