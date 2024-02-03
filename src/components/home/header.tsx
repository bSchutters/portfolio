export default function Header() {
  return (
    <header className="relative flex w-full flex-col items-center gap-5 lg:-mt-24">
      <div className="w-full lg:w-4/5">
        <div className="overflow-hidden">
          <p className="header-lead text-6xl font-bold leading-snug lg:text-[170px]">
            Making
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="header-lead text-center text-6xl font-bold leading-none lg:text-[170px]">
            the web
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="header-lead text-end text-6xl font-bold italic leading-none lg:text-[170px]">
            better
          </p>
        </div>
      </div>
      <div className="bottom-0 left-0 self-start overflow-hidden lg:absolute ">
        <p className="header-lead text-md font-bold  lg:text-xl">
          I'm Schutters Bryan, <br />a{" "}
          <span className="italic">passionate</span> and{" "}
          <span className="italic">detail-oriented</span> <br />
          <span className="italic">Fronted developer.</span>
        </p>
      </div>
    </header>
  );
}
