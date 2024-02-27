import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Count from "./components/Count";
import Limit from "./components/Limit";
import Count2 from "./components/Count2";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

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
  /* <div className="container">
      {count < 3 ? <Count count={count} value={value} /> : <Limit />}
      <div className="buttons">
        <Buttons clickHandler={decrementCount}>-</Buttons>
        <Buttons clickHandler={incrementCount}>+</Buttons>
      </div>
    </div> */

  return (
    <div>
      {numbers.map((number) => (
        <Count2 key={number} number={number} />
      ))}
    </div>
  );
}

export default App;
