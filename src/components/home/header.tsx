export default function Header() {
  return (
    <header className="relative flex w-full flex-col items-center gap-5">
      <div className="w-full lg:w-4/5">
        <p className="text-6xl font-bold  leading-snug lg:text-[170px]">
          Making
        </p>
        <p className="text-center text-6xl font-bold leading-snug lg:text-[170px]">
          the web
        </p>
        <p className="text-end text-6xl font-bold italic leading-none lg:text-[170px]">
          better
        </p>
      </div>
      <p className="text-md bottom-0 left-0 self-start font-bold lg:absolute lg:text-xl">
        I'm Schutters Bryan, <br />a <span className="italic">passionate</span>{" "}
        and <span className="italic">detail-oriented</span> <br />
        <span className="italic">Fronted developer.</span>
      </p>
    </header>
  );
}
