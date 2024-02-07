import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pngtree-green-leaves-vector-icon-design-on-white-background-various-shapes-of-png-image_1870597-removebg-preview.png";

function Header() {
  return (
    <header>
      <article>
        <img src={Logo} alt="Logo" />
        <p>Ecoscore</p>
      </article>
      <nav>
        <ul>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/astuces">Astuces</Link>
          </li>
          <li>
            <Link to="/classement">Classement</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
