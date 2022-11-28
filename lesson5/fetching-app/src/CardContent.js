function CardContent({ myPokemon }) {
  return (
    <div class="content">
      <h1>{myPokemon.name}</h1>
      <span>{myPokemon.id}</span>
      <img src={myPokemon.sprites?.front_default} alt="" />
      <h3>I choose you!</h3>
    </div>
  );
}

export default CardContent;
