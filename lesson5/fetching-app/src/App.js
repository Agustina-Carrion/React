import { useEffect, useState } from "react";
import "./App.css";
import CardContent from "./CardContent";

function App() {
  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/8")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.name);
        setMyPokemon(data);
      });
  }, []);

  return (
    <div className="App">
      <div>{myPokemon.name}, I choose you!</div>
      <div class="container">
        <CardContent myPokemon={myPokemon.name} />
        <div class="flap"></div>
      </div>
    </div>
  );
}

export default App;
