import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function headerDesktop() {
  return (
    <header className="flex justify-center">
      <article className="w-full p-4 h-40">
        <div className="border-r shadow-md p-1 bg-gold rounded-full w-full w-4/5 flex items-center justify-between text-white text-xl">
          <div className="flex items-center">
            <div className="rounded-full bg-white h-16 w-16 mr-2 flex items-center justify-center">
              <img src={Logo} alt="Logo" />
            </div>
            <p>Ecoscore</p>
          </div>
          <nav className="">
            <ul className="flex">
              <li>
                <Link to="/EcoScore" className="px-2">
                  Test
                </Link>
              </li>
              <li>
                <Link to="/Astuces" className="px-2">
                  Astuces
                </Link>
              </li>
              <li>
                <Link to="/Classement" className="px-2">
                  Classement
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </header>
  );
}

export default headerDesktop;
