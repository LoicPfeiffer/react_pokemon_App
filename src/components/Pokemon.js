import "./style.css";
import React, { useEffect, useState } from "react";
/*import { Card } from "semantic-ui-react";*/

const PokemonCard = ({ pokemonData }) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = () => {
      /* navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });*/
      console.log(pokemonData.url);
      fetch(pokemonData.url).then((res) => {
        /* console.log(res);*/
        res
          .json()

          .then((result) => {
            setData(result);
            console.log(result);
          });
      });
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      {typeof data != "undefined" ? (
        <p className="header"> {data.abilities[0].ability.name}</p>
      ) : (
        ""
      )}
      <p className="header">Nom du Pokemon :{pokemonData.name}</p>.
      <p className="header">{pokemonData.url}</p>
      <div className="flex"></div>
    </div>
  );
};

export default PokemonCard;
