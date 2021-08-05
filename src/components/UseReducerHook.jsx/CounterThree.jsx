import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return {
        firstCounter:
          state.firstCounter <= action.value
            ? 0
            : state.firstCounter - action.value,
      };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count {count.firstCounter}</p>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default CounterThree;
