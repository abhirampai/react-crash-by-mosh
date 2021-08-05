import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <h1>UseCallBack hook</h1>;
};

export default React.memo(Title);
