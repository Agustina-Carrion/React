// import { useState } from "react";

function Counter({count, setCount}) {
  // const [count, setCount] = useState(0);

  function handleClickUp() {
    setCount(count + 1);
  }

  function handleClickDown() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={handleClickUp}> Click Up</button>
      <div> {count} </div>
      <button onClick={handleClickDown}> Click Down</button>
    </>
  );
}

export default Counter;
