import { Link } from "react-router-dom";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="welcome">
        <p className="eyebrow">Río, laguna y mar</p>
        <h1>Que no se te escape.</h1>
        <p className="lead">
          Bienvenido a El Pique: cañas, reels, señuelos y todo lo que entra en
          la caja de pesca.
        </p>
        <Link className="btn bg-primary" to={"/productos"}>
          Ver catálogo
        </Link>
      </section>
      <ItemListContainer />
    </>
  );
};
