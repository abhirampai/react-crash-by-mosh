import { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return (state += 1);
    case "Decrement":
      return state <= 0 ? 0 : state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const ParentComponent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CountContext.Provider
        value={{ countState: count, countDispatcher: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </>
  );
};

export default ParentComponent;
