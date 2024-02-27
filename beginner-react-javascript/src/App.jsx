import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="container">
      <Count count={count} />
      <div className="buttons">
        <Buttons clickHandler={decrementCount}>-</Buttons>
        <Buttons clickHandler={incrementCount}>+</Buttons>
      </div>
    </div>
  );
}

export default App;
