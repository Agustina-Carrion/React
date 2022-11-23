import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [inputValue, setInputValue] = useState(" ");

  const [businessCards, setBusinessCard] = useState([]);

  function inputTypeHandler(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function addingBusinessCard(event) {
    console.log(event.target.value);
    if (event.key === "Enter") {
      setBusinessCard([...businessCards, inputValue]);
      setInputValue(" ");
    }
  }

  const form = [
    {
      label: "First Name: ",
      type: "text",
    },
    {
      label: "Last Name: ",
      type: "text",
    },
    {
      label: "Age: ",
      type: "number",
    },
    {
      label: "Location: ",
      type: "text",
    },
  ];

  return (
    <div className="App">
      <div className="businessCard">
        {businessCards.map((businessCardInfo) => (
          <p>{businessCardInfo}</p>
        ))}
        {/* <div> First Name </div>
        <div> Last Name </div>
        <div> Age </div>
        <div> Location </div> */}
      </div>
      <br />
      <div>
        {form.map((input) => (
          <Form
            label={input.label}
            type={input.type}
            inputTypeHandler={inputTypeHandler}
            addingBusinessCard={addingBusinessCard}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
