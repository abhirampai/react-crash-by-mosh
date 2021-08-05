import React, { useState, useEffect } from "react";

const UpdateDocumentTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Button Clicked ${count} Times`;
  });
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="btn btn-primary btn-sm"
    >
      Button Clicked {count} Times
    </button>
  );
};

export default UpdateDocumentTitle;
