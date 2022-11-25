import "./styles/PokeList.css";
import PokeCard from "./PokeCard";
import { pokeClasses } from "../pokeClasses";

function PokeList({handleOnClick}) {
  const cells = pokeClasses.map((pokeClass) => {
    return <PokeCard key={pokeClass.id} pokeClass={pokeClass} handleOnClick={handleOnClick} />;
  });

  return <section className="poke-list">{cells}</section>;
}

export default PokeList;
