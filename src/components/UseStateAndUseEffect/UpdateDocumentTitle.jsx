import React, { useState, useEffect } from "react";

const UpdateDocumentTitle = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updated document title");
    document.title = `Button Clicked ${count} Times`;
  },[count]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-primary btn-sm"
      >
        Button Clicked {count} Times
      </button>
    </div>
  );
};

export default UpdateDocumentTitle;
