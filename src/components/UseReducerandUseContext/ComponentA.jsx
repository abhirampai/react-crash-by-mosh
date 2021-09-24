import { useContext } from "react";
import { CountContext } from "./ParentComponent";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <p>Count {countContext.countState}</p>
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

export default ComponentA;
