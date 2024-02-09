import React from "react";
import Routes from "./Routes";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
