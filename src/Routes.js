import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.js";
import TipsPage from "./pages/tipsPage.js";
import RankPage from "./pages/rankPage.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/EcoScore" element={<HomePage />} />
      <Route path="/Astuces" element={<TipsPage />} />
      <Route path="/Classement" element={<RankPage />} />
    </Routes>
  );
}

export default AppRoutes;
