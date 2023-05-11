import Cartwidget from "../CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <p className="navbar__title">Padel Store San Luis</p>
      <div className="navbar__category">
        <Link to={"/"}>HOME</Link>
        <Link to={"/category/1"}>INDUMENTARIA</Link>
        <Link to={"/category/2"}>CALZADO</Link>
        <Link to={"/category/3"}>ACCESORIOS</Link>
        <Link to={"/category/4"}>PELOTAS</Link>
        <Link to={"/category/5"}>PALETAS</Link>
      </div>
      <Cartwidget />
    </div>
  );
};