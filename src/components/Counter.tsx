import { useState } from "react";
import "./Counter.scss"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>counter: {counter}</h1>
    </div>
  );
};
