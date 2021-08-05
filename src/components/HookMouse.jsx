import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("Use effect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
        console.log("Mouse Event removed");
        window.removeEventListener('mousemove', logMousePosition);
    }
  }, []);
  return (
    <div>
      {" "}
      <h1>{x}</h1> <h1>{y}</h1>{" "}
    </div>
  );
};

export default HookMouse;
