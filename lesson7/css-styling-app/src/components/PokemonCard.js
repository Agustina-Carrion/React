import { useState, useEffect } from "react";
import styles from "../styles/PokemonCard.module.css";

function PokemonCard({ myPokemonID }) {
  const [myPokemon, setMyPokemon] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${myPokemonID}`;
    const pokemonFromStorage = JSON.parse(
      window.localStorage.getItem(myPokemonID)
    );

    if (!pokemonFromStorage) {
      console.log("Fetching new pokemon from API");
      fetch(url)
        .then((response) => response.json())
        .then((resultPokemon) => {
          console.log(resultPokemon);
          if (resultPokemon) {
            const pokemonObject = {
              name: resultPokemon?.name,
              sprite:
                resultPokemon.sprites?.other["official-artwork"]?.front_default,
              id: resultPokemon?.id,
            };
            setMyPokemon(pokemonObject);
            window.localStorage.setItem(
              myPokemonID,
              JSON.stringify(pokemonObject)
            );
          }
        })
        .catch((error) => {
          console.log("Something went wrong", error);
          setFetchError(true);
        });
    } else {
      console.log("Found pokemon in localStorage");
      setMyPokemon(pokemonFromStorage);
    }
  }, [myPokemonID]);

  return (
    !fetchError && (
      <div className={styles.container}>
        <h1>{myPokemon.name?.toUpperCase()}</h1>
        <h3>I choose you!!</h3>
        <img src={myPokemon?.sprite} alt={myPokemon?.name} />
      </div>
    )
  );
}
export default PokemonCard;
