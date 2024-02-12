import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pngtree-green-leaves-vector-icon-design-on-white-background-various-shapes-of-png-image_1870597-removebg-preview.png";
import useIsMobile from "../helpers/useIsMobile.js";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

function Header() {
  const isMobile = useIsMobile();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const commonHeaderContent = (
    <div className="border-r shadow-md p-1 bg-gold rounded-full w-full w-4/5 flex items-center justify-between text-white text-xl">
      <div className="flex items-center">
        <div className="rounded-full bg-white h-16 w-16 mr-2 flex items-center justify-center">
          <img src={Logo} alt="Logo" />
        </div>
        <p>Ecoscore</p>
      </div>
      {isMobile === "mobile" && (
        <div className="chevron" onClick={() => setShowMobileNav(!showMobileNav)}>
          {showMobileNav ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>
      )}
    </div>
  );

  return (
    <header className="flex justify-center">
      <article className="w-full p-4 h-40">
        {commonHeaderContent}
        {isMobile === "desktop" && (
          <nav className="absolute right-5 flex-1">
            <ul className="flex ">
              <li>
                <Link to="/" className="px-2">
                  Test
                </Link>
              </li>
              <li>
                <Link to="/astuces" className="px-2">
                  Astuces
                </Link>
              </li>
              <li>
                <Link to="/classement" className="px-2">
                  Classement
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {isMobile === "mobile" && (
          <nav className={`mobileNav ${showMobileNav ? "mobileMasked" : ""}`}>
            <ul className="flex justify-evenly m-4">
              <li>
                <Link to="/" className="px-2">
                  Test
                </Link>
              </li>
              <li>
                <Link to="/astuces" className="px-2">
                  Astuces
                </Link>
              </li>
              <li>
                <Link to="/classement" className="px-2">
                  Classement
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </article>
    </header>
  );
}

export default Header;
