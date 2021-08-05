import React from "react";

const Button = ({ onHandle, children }) => {
  console.log(`Rendering ${children}`);
  return <button onClick={onHandle}>{children}</button>;
};

export default React.memo(Button);
