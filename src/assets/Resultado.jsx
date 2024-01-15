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
      <div>
      {cep.cep && <p>CEP: {cep.cep}</p>}
      {cep.logradouro && <p>LOGRADOURO: {cep.logradouro}</p>}
      {cep.bairro && <p>BAIRRO: {cep.bairro}</p>}
      </div>
      {cep.localidade && <p>LOCALIDADE: {cep.localidade}</p>}
      {cep.ddd && <p>DDD: {cep.ddd}</p>}
    </div>
  );
};

export default Resultado;
