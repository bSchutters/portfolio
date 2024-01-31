interface WorkProps {
  title: string;
  desc: string;
  img: string;
}

export default function Work({ title, desc, img }: WorkProps) {
  return (
    <div className="relative flex w-full flex-col gap-5 lg:w-4/5">
      <img
        src={img}
        alt={title}
        className="z-10 max-h-[450px] min-w-full rounded-3xl object-cover"
      />
      <div className="flex flex-col gap-1">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-secondary text-base font-bold">{desc}</div>
      </div>
    </div>
  );
}
