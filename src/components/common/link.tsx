import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export default function Link({ to, children, isActive }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={`${isActive ? "active" : ""} text-secondary transition-all ease-in-out hover:text-white`}
    >
      {children}
    </NavLink>
  );
}
