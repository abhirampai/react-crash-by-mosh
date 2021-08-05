import React from "react";

const Count = ({ count, children }) => {
  console.log(`Rendering ${children}`);
  return (
    <div>
      <h1>{count}</h1>
      {children}
    </div>
  );
};

export default React.memo(Count);
