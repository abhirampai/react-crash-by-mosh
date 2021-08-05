import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCounter: state.firstCounter + 1 };
    case "Decrement":
      return {
        firstCounter: state.firstCounter <= 0 ? 0 : state.firstCounter - 1,
      };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count {count.firstCounter}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
