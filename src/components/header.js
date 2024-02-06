import React from "react";
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
            <a href="#">Test</a>
          </li>
          <li>
            <a href="#">Astuces</a>
          </li>
          <li>
            <a href="#">Classements</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
