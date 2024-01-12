import React, { useState } from "react";
import Buscar from "./Buscar";
import "/src/resultado.css";
const Resultado = ({ valor }) => {
  const [cep, setCep] = useState({});

  fetch(`https://viacep.com.br/ws/${valor}/json/`).then((r) =>
    r.json().then((cep) => {
      return setCep(cep);
    })
  );
  return (
    <div className="info-cep">
      {cep.cep && <p>cep: {cep.cep}</p>}
      {cep.logradouro && <p>logradouro: {cep.logradouro}</p>}
      {cep.bairro && <p>bairro: {cep.bairro}</p>}
      {cep.localidade && <p>localidade: {cep.localidade}</p>}
      {cep.ddd && <p>ddd: {cep.ddd}</p>}
    </div>
  );
};

export default Resultado;
