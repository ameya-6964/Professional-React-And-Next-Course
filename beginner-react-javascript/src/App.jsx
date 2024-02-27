import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Count from "./components/Count";
import Limit from "./components/Limit";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setValue((prevValue) => prevValue + 1);
  }
  function decrementCount() {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setValue((prevValue) => prevValue + 1);
  }
  return (
    <div className="container">
      {count < 3 ? <Count count={count} value={value} /> : <Limit />}
      <div className="buttons">
        <Buttons clickHandler={decrementCount}>-</Buttons>
        <Buttons clickHandler={incrementCount}>+</Buttons>
      </div>
    </div>
  );
}

export default App;
