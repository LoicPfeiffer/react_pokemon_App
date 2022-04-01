import React from "react";
import "./style.css";
/*import { Card } from "semantic-ui-react";*/

const PokemonCard = ({ pokemonData }) => (
  <div className="main">
    <p className="header">Nom du Pokemon :{pokemonData}</p>
    <div className="flex"></div>
  </div>
);

export default PokemonCard;
