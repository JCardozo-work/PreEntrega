import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { formatPrice } from "../../utils/categories";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <Item {...item}>
      <p className="cart-line">
        {item.quantity} × {formatPrice(item.price)} ={" "}
        <strong>{formatPrice(item.price * item.quantity)}</strong>
      </p>
      <button className="btn bg-delete" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </Item>
  );
};
