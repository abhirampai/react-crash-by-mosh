import Button from "./Button";
import React, { useCallback, useState } from "react";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count count={age}>Age</Count>
      <Button onHandle={incrementAge}>Increment Age</Button>
      <Count count={salary}>Salary</Count>
      <Button onHandle={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
