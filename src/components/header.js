import React from "react";
import useIsMobile from "../helpers/useIsMobile.js";
import HeaderDesktop from "./headerDesktop.js";
import HeaderMobile from "./headerMobile.js";

function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile === "desktop" && <HeaderDesktop />}
      {isMobile === "mobile" && <HeaderMobile />}
    </>
  );
}

export default Header;
