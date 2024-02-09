export default function Header() {
  return (
    <header className="relative flex w-full flex-col items-center gap-5 lg:-mt-24">
      <div className="w-full italic lg:w-4/5">
        <div className="overflow-hidden">
          <p className="header-lead text-6xl leading-snug lg:text-[170px]">
            Making
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="header-lead text-center text-6xl leading-none lg:text-[170px]">
            <span className="">the</span> web
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="header-lead  pr-6 text-end text-6xl leading-none lg:text-[170px]">
            better
          </p>
        </div>
      </div>
      <div className="bottom-0 left-0 self-start overflow-hidden lg:absolute ">
        <p className="header-lead text-md  lg:text-xl">
          I'm Schutters Bryan, <br />a{" "}
          <span className="font-playfair italic">passionate</span> and{" "}
          <span className="font-playfair italic">detail-oriented</span> <br />
          <span className="font-playfair italic">Frontend developer.</span>
        </p>
      </div>
    </header>
  );
}
