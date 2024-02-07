import Link from "./link";

interface WorkProps {
  title: string;
  desc: string;
  img: string;
  to: string;
  wip: boolean;
  className?: string;
}

export default function Work({
  title,
  desc,
  img,
  to,
  className,
  wip = true,
}: WorkProps) {
  const cursorAttributeName = wip ? "cursor-wip" : "cursor-open";
  return (
    <>
      <Link
        to={to}
        className={`work-card relative flex w-full flex-col gap-5 lg:w-4/5 ${className}`}
      >
        <img
          src={img}
          alt={title}
          className="z-10 max-h-[450px] min-w-full rounded-3xl object-cover"
          {...{ [cursorAttributeName]: "true" }}
        />
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold text-white">{title}</div>
          <div className="text-base font-bold text-secondary">{desc}</div>
        </div>
      </Link>
    </>
  );
}
