import { useEffect, useState } from "react";
import "./App.css";
import CardContent from "./CardContent";
import { Route } from "wouter";

function App() {
  const [myPokemon, setMyPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/4`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myPokemon) {
        console.log(myPokemon);
        setMyPokemon(myPokemon);
      });
  }, []);

  return (
    <div className="App">
      {/* These lines of code create a list of pokemon when the fetch gives a limit to the query */}
      {/* <ul>{myPokemon.results?.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}</ul> */}

      <Route path="/pokemon/:id">
        {(params) => <p> Pokemon Number {params.id} </p>}
      </Route>

      <div class="container">
        <CardContent myPokemon={myPokemon} />
        <div class="flap"></div>
      </div>
    </div>
  );
}

export default App;
