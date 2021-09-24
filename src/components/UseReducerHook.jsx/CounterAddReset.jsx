import { useReducer, useState } from "react";

const initialState = [];
const reduceFunction = (state, action) => {
  switch (action.type) {
    case "ADD":
    case "add":
      return [...state, action.value];

    case "RESET":
    case "reset":
      return [];
    default:
      return state;
  }
};
const CounterAddReset = () => {
  const [list, dispatch] = useReducer(reduceFunction, initialState);
  const [v, setV] = useState("");
  return (
    <>
      <input value={v} onChange={(e) => setV(e.target.value)}></input>
      <hr />
      <button onClick={() => dispatch({ type: "ADD", value: v })}>Add</button>
      <div
        style={{
          width: "25%",
          display: "inline-block",
        }}
      />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <hr />
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default CounterAddReset;
