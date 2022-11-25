import { useEffect, useState } from "react";
import "./App.css";
import CardContent from "./CardContent";

function App() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setPokeList(data);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {pokeList.name}
      </ul>
      <div class="container">
        <CardContent pokeList={pokeList.name}/>
        <div class="flap"></div>
      </div>
    </div>
  );
}

export default App;
