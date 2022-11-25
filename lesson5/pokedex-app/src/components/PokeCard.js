import "./styles/PokeCard.css";
import sprites from "../assets/sprites.png";

function PokeCard({ pokeClass, handleOnClick }) {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return (
    <button
      onClick={() => handleOnClick(id)}
      style={style}
      className="poke-card"
    ></button>
  );
}

export default PokeCard;
