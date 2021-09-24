import { useContext } from "react";
import { CountContext } from "./ParentComponent";

const ComponentC = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <button onClick={() => countContext.countDispatcher("Increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatcher("Decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatcher("Reset")}>
        Reset
      </button>
    </div>
  );
};

export default ComponentC;
