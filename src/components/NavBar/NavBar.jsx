import { Link, useLocation } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { CATEGORIES } from "../../utils/categories";
import "./NavBar.css";

export const NavBar = () => {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/productos", label: "Productos" },
    ...CATEGORIES.map((category) => ({
      to: `/productos/${category.slug}`,
      label: category.label,
    })),
  ];

  return (
    <nav>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.to}>
            <Link className={pathname === link.to ? "active" : ""} to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};
