import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/categories";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <div className="cart-actions">
      <p>
        Total a pagar <strong>{formatPrice(total)}</strong>
      </p>
      <button className="btn bg-success" onClick={checkout}>
        Finalizar compra
      </button>
    </div>
  );
};
