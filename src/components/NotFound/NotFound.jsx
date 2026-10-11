import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="status">
      <h1>Acá no pica nada</h1>
      <p>La página que buscás no existe o se la llevó la corriente.</p>
      <Link className="btn bg-primary" to={"/"}>
        Volver a la tienda
      </Link>
    </section>
  );
};
