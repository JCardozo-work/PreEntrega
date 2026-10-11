import "./Item.css";
import { formatPrice, getCategoryLabel } from "../../utils/categories";

export const Item = ({ name, price, description, image, category, children }) => {
  return (
    <article className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <span className="card-category">{getCategoryLabel(category)}</span>
        <h3>{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{formatPrice(price)}</p>

        {/* Podemos usar children y reutilizar este componente */}
        {children}
      </div>
    </article>
  );
};
