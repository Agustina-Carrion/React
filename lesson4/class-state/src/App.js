import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Person");

  function typeHandler(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  // const people = [
  //   { name: "Bob" },
  //   { name: "Lala" },
  //   { name: "Peter" },
  //   { name: "Andi" },
  // ];

  const [inputValue, setInputValue] = useState(" ");
  const [listPeople, setListPeople] = useState(["Blob", "Chet"]);

  function inputTypeHandler(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function addingPeopleHandler(event) {
    console.log(event.target.value);
    if (event.key === "Enter") {
      setListPeople([...listPeople, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div className="App">
      <h1>Hello {username} </h1>
      <input value={username} onChange={typeHandler} />
      <br />
      <Counter count={count} setCount={setCount} />
      <br />
      <br />
      <Counter count={count} setCount={setCount} />
      <br />
      <br />
      <Counter count={count} setCount={setCount} />
      <br />
      <br />
      <Counter count={count} setCount={setCount} />
      <br />
      <ul>
        {/* {people.map((person) => {
          return <li>{person.name}</li>;
        })} */}
        {listPeople.map((listPerson) => (
          <li>{listPerson}</li>
        ))}
      </ul>
      <input
        value={inputValue}
        onChange={inputTypeHandler}
        onKeyPress={addingPeopleHandler}
        type="text"
      />
    </div>
  );
}

export default App;
