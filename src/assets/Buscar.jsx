import React from "react";
import { useState } from "react";
const Buscar = () => {
  const form = document.getElementById("form");
  const valorCep = document.getElementById("cep");

  const [valor, setValor] = useState("");
  const handleClick = (event) => {
    setValor(event.target.value);
  };

  const button = () => {
    console.log(valor);
  };

  return (
    <main>
      <label htmlFor="cep">Digite seu cep</label>
      <input id="cep" type="number" value={valor} onChange={handleClick} />
      <button onClick={button}>Buscar</button>
    </main>
  );
};

export default Buscar;
