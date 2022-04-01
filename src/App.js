import "./App.css";
import React, { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      /* navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });*/

      await fetch(`${process.env.REACT_APP_API_URL}`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {typeof data != "undefined" ? (
        <pokemon pokemonData={data} />
      ) : (
        <div>{JSON.stringify(data, undefined, true)}</div>
      )}
    </div>
  );
}
