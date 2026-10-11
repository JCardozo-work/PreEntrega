import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";
import { CATEGORIES } from "../../utils/categories";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to={"/"} end>
            Todo
          </NavLink>
        </li>
        {CATEGORIES.map((category) => (
          <li key={category.slug}>
            <NavLink to={`/category/${category.slug}`}>{category.label}</NavLink>
          </li>
        ))}
        <li>
          <NavLink className="cart-link" to={"/cart"}>
            Carrito
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
