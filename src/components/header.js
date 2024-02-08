import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pngtree-green-leaves-vector-icon-design-on-white-background-various-shapes-of-png-image_1870597-removebg-preview.png";

function Header() {
  return (
    <header className="flex justify-center p-4">
      <article className="w-full w-4/5 flex items-center space-x-4 text-center text-white text-xl">
      <div className="rounded-full bg-white h-16 w-16 mr-2 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
        <p>Ecoscore</p>
      </article>
      <nav>
      <ul>
          <li>
            <Link to="/" className="px-2">Test</Link>
          </li>
          <li>
            <Link to="/astuces" className="px-2">Astuces</Link>
          </li>
          <li>
            <Link to="/classement" className="px-2">Classement</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
