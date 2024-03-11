import { useState } from "react";
import s from "./counter.module.scss"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment} className={s.specc}>Increment</button>
      <h1>counter: {counter}</h1>
    </div>
  );
};
