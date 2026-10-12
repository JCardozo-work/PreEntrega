import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link className="cart-widget" to={"/carrito"} aria-label={`Carrito: ${totalItems} productos`}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          d="M3 4h2l2.4 10.2a1.5 1.5 0 0 0 1.5 1.1h8.6a1.5 1.5 0 0 0 1.5-1.1L21 7H6.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="19.5" r="1.5" fill="currentColor" />
        <circle cx="17" cy="19.5" r="1.5" fill="currentColor" />
      </svg>
      <span className="cart-count">{totalItems}</span>
    </Link>
  );
};
