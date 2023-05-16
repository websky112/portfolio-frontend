import { Link, useLocation } from "react-router-dom";
import Me from "../../assets/images/me.jpg";
import { NavItem } from "./NavItem";

export const Topbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed z-10 w-full h-20 flex justify-between items-center px-16">
      <div className="flex gap-8 items-center">
        <img
          src={Me}
          alt="Logo"
          width={48}
          height={48}
          className="object-fill mr-6 rounded-full"
        />
        <Link to="/">
          <NavItem active={pathname === "/"}>Portfolios</NavItem>
        </Link>
        <Link to="/about">
          <NavItem active={pathname === "/about"}>About</NavItem>
        </Link>
        <Link to="/contact">
          <NavItem active={pathname === "/contact"}>Contact</NavItem>
        </Link>
      </div>
    </div>
  );
};
