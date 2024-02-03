import { LuMoveRight } from "react-icons/lu";

interface ServiceProps {
  title: string;
  className?: string;
}

export default function Service({ title, className }: ServiceProps) {
  return (
    <li className={`flex items-center gap-4 ${className}`}>
      <LuMoveRight />
      <p>{title}</p>
    </li>
  );
}
