import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //El array de dependencias lleva el "id": si cambia el producto de la URL
    //se vuelve a pedir el detalle. "ignore" descarta respuestas viejas.
    let ignore = false;

    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar el producto");
        }

        return res.json();
      })
      .then((data) => {
        if (ignore) return;
        const item = data.find((product) => String(product.id) === id);
        if (!item) throw new Error("Producto no encontrado");
        setItemDetail(item);
        setError(null);
      })
      .catch((error) => {
        if (ignore) return;
        setItemDetail(null);
        setError(error.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) return <p className="status">Tirando la línea...</p>;

  if (error || !itemDetail) {
    return (
      <section className="status">
        <h1>{error ?? "Producto no encontrado"}</h1>
        <Link className="btn bg-primary" to={"/productos"}>
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section>
      <Link className="back-link" to={"/productos"}>
        ← Volver al listado
      </Link>
      <ItemDetail item={itemDetail} />
    </section>
  );
};
