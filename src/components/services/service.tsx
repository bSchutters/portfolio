import { LuMoveRight } from "react-icons/lu";

interface ServiceProps {
  title: string;
}

export default function Service({ title }: ServiceProps) {
  return (
    <li className="flex items-center gap-4">
      <LuMoveRight />
      <p>{title}</p>
    </li>
  );
}
