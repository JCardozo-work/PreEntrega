import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="" />
          <span>
            El Pique
            <small>Artículos de pesca</small>
          </span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
