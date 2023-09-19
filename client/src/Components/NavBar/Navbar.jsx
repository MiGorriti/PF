import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import Favorites from "../Favorites/Favorites";

const Navbar = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Obtener el nombre del usuario del localStorage al cargar la página
    const storedFullName = localStorage.getItem("fullName");
    if (storedFullName) {
      setFullName(storedFullName);
    }
  }, []);

  const handleLogout = () => {
    // Eliminar el nombre del usuario del localStorage al cerrar sesión
    localStorage.removeItem("fullName");
    navigate("/");
    setFullName("");
    // Aquí puedes agregar cualquier otra lógica para cerrar la sesión, como redirigir al usuario a la página de inicio de sesión, etc.
  };

  return (
    <nav className="nav">
      <div className="divLogo">IGNITE MOTORS</div>
      <Link to="/Home" className="nav__brand">
        {" "}
      </Link>
      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="/Home" className="nav__link">
            VEHICULOS
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/About" className="nav__link">
            NOSOTROS
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Favorites" className="nav__link">
            FAVORITOS
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Form" className="nav__link">
            VENDER VEHICULO
          </Link>
        </li>
        <li className="nav__item">
          {fullName ? (
            <>
              <span className="nav__welcome">¡Bienvenido, {fullName}! </span>
              <button className="nav__logout" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link to="/registro" className="nav__link">
              REGISTRATE
            </Link>
          )}
        </li>
        <li className="nav__item">
          <Link to="/Login" className="nav__link">
            INICIAR SESION
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
