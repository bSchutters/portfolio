import Link from "./link";

interface WorkProps {
  title: string;
  desc: string;
  img: string;
  to: string;
  tags: string;
  wip: boolean;
  external: boolean;
  className?: string;
}

export default function Work({
  title,
  desc,
  img,
  to,
  tags,
  className,
  wip = true,
  external = false,
}: WorkProps) {
  const cursorAttributeName = wip ? "cursor-wip" : "cursor-open";
  const LinkComponent = external && wip === false ? "a" : Link;
  return (
    <>
      <LinkComponent
        {...(external && !wip ? { href: to } : {})}
        {...(external && !wip
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(!external && !wip ? { to: to } : { to: "/work/" })}
        className={`work-card relative flex w-full flex-col gap-5 lg:w-4/5 ${className}`}
      >
        <img
          src={img}
          alt={title}
          className="z-10 max-h-[450px] min-w-full rounded-3xl object-cover"
          {...{ [cursorAttributeName]: "true" }}
        />
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold text-white">
            {title} |
            <span className="text-base font-medium  text-secondary">
              {" "}
              {tags}
            </span>
          </div>
          <div className="text-base font-medium text-secondary">{desc}</div>
        </div>
      </LinkComponent>
    </>
  );
}
