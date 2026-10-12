import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addToCart, getQuantity } = useCart();
  const quantity = getQuantity(item.id);

  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <div className="detail-actions">
          <button className="btn bg-primary" onClick={() => addToCart(item)}>
            Agregar al carrito
          </button>
          {quantity > 0 && (
            <p className="in-cart-note">
              Tenés {quantity} en el carrito · <Link to={"/carrito"}>Ver carrito</Link>
            </p>
          )}
        </div>
      </Item>
    </div>
  );
};
