import { useState, useEffect } from "react";

function PokemonCard({ myPokemonID }) {
  const [myPokemon, setMyPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${myPokemonID}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myPokemon) {
        console.log(myPokemon);
        setMyPokemon(myPokemon);
      });
  }, [myPokemonID]);

  return (
    <div class="content">
      <h1>{myPokemon.name}</h1>
      <span>{myPokemon.id}</span>
      <img src={myPokemon.sprites?.front_default} alt="" />
      <h3>I choose you!</h3>
    </div>
  );
}

export default PokemonCard;
