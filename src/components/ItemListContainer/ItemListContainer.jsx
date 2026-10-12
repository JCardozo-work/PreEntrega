import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getCategoryLabel } from "../../utils/categories";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }

        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Tirando la línea...</p>;
  if (errors) return <p className="status">{errors}</p>;

  //El filtro se calcula en cada render a partir de la URL: no hace falta otro estado
  const visibleProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <section>
      <div className="list-heading">
        <p className="eyebrow">{category ? "Categoría" : "Catálogo"}</p>
        <h2>{category ? getCategoryLabel(category) : "Todos los productos"}</h2>
      </div>
      <ItemList products={visibleProducts} />
    </section>
  );
};
