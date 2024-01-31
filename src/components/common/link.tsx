import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export default function Link({ to, children, isActive, className }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={`${isActive ? "active" : ""} text-secondary transition-all ease-in-out hover:text-white ${className}`}
    >
      {children}
    </NavLink>
  );
}
