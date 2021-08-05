import React, { useState, useMemo } from "react";

const UseMemoCounters = () => {
  const [count1, setCount] = useState(0);
  const [count2, setCountTwo] = useState(0);
  const isEven = useMemo(() => {
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div>
      <button onClick={() => setCount(count1 + 1)}>
        Increment Count {count1}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={() => setCountTwo(count2 + 1)}>
        Increment Count {count2}
      </button>
    </div>
  );
};

export default UseMemoCounters;
