import PokemonCard from "./PokemonCard";
import { Link, Route } from "wouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link href="/pokemon/8"> Some pokemon </Link>
      <Route path="/pokemon/:id">
        {(params) => (
          <div className="container">
            <PokemonCard myPokemonID={params.id} /> <div className="flap"></div>
          </div>
        )}
      </Route>
    </div>
  );
}

export default App;
