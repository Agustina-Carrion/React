import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [myPokemon, setMyPokemon] = useState([]);

  function onClickHandler(e) {
    console.log(e);
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.name);
        setMyPokemon(data);
      });
  }, [onClickHandler]);

  return (
    <div className="App">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen </p>
      <button onClick={onClickHandler}>Click me</button>
      <div>I'll get some {myPokemon.name}</div>
    </div>
  );
}

export default App;
