import PokemonCard from "./PokemonCard";
import { Link, Route } from "wouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link href="/pokemon/8"> Some pokemon </Link>
      <Route path="/pokemon/:id">
        {(params) => <PokemonCard myPokemonID={params.id} />}
      </Route>

      <div className="container">
        {/* <CardContent myPokemon={myPokemon} /> */}
        <div className="flap"></div>
      </div>
    </div>
  );
}

export default App;
