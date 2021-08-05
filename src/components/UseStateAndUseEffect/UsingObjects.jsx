import React, { useState } from "react";

const UsingObjects = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <form />
      <input
        type="text"
        onChange={(e) => setName({ ...name,firstName: e.target.value })}
        placeholder="Enter FirstName"
        value={name.firstName}
      />
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="Enter LastName"
        value={name.lastName}
      />
      <h2>
        {name.firstName} {name.lastName}
      </h2>
    </div>
  );
};

export default UsingObjects;
