import React from "react";
import { useState } from "react";
import Resultado from "./Resultado";
import "/src/buscar.css";
const Buscar = () => {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const handleClick = () => {
    setResultado(valor);
  };

  return (
    <main className="main">
      <div>
        <input
          id="cep"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Pesquisar cep..."
        />
        <button onClick={handleClick}>Buscar</button>
      </div>
      <div className="div-resultado">
        <Resultado valor={resultado} />
      </div>
    </main>
  );
};

export default Buscar;
