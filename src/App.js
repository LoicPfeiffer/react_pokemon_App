import "./App.css";
import React, { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";

export default function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = () => {
      /* navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });*/
      console.log(process.env.REACT_APP_API_URL);
      fetch(process.env.REACT_APP_API_URL).then((res) => {
        /* console.log(res);*/
        res
          .json()

          .then((result) => {
            setData(result.results);
            console.log(result);
          });
      });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {typeof data != "undefined" ? (
        data.map((pokemon) => (
          <Pokemon pokemonData={pokemon} key={pokemon.name} />
        ))
      ) : (
        <div>{JSON.stringify(data, undefined, true)}</div>
      )}
    </div>
  );
}
