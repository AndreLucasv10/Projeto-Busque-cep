import React from "react";
import logo from "/src/img/localizador.svg";
import "/src/style.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Busque seu CEP</h1>
      <img className="logo" src={logo} alt="" />
    </div>
  );
};

export default Header;
