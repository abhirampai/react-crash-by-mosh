import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count <= 0 ? 0 : count - 1);
  };
  return (
    <div className="m-2">
      <span className="badge bg-primary">Count {count}</span>
      <button onClick={incrementCount} className="btn btn-secondary btn-sm m-2">
        Increment
      </button>
      <button onClick={decrementCount} className="btn btn-danger btn-sm m-2">
        Decrement
      </button>
    </div>
  );
};

export default HookCounter;
