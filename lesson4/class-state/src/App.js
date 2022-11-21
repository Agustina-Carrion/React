import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
