import { useState } from "react";

const initForm = {
  email: "",
  password: "",
  confirmPassword: "",
};
const SampleForm2 = () => {
  const [form, setForm] = useState(initForm);
  const [errorMessage, setErrorMessage] = useState("");

  const isFormValid = () => {
      let isValid = true;
      let error = "";
      if(form.email === "" || form.password === "" || form.confirmPassword === "") {
          isValid = false;
          error = "Please Check if email password or confirm password is empty";
      } else if (form.password !== form.confirmPassword) {
          isValid = false;
          error = "Password and Confirm Password doesn't match";
      }
      return [isValid, error];

  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    const prevFormState = { ...form };
    prevFormState[name] = value;
    setForm(prevFormState);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const [isValid, error] = isFormValid();
      if( isValid ) console.log(form);
      setErrorMessage(error);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={form.email}
          type="email"
          placeholder="oliver@gmail.com"
        ></input>
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={form.password}
          type="password"
          placeholder="********"
        ></input>
        <label>Confirm Password</label>
        <input
          onChange={handleChange}
          name="confirmPassword"
          value={form.confirmPassword}
          type="password"
          placeholder="********"
        ></input>
        <button type="submit">Submit</button>
        <br/>
        {errorMessage}
      </form>
    </>
  );
};

export default SampleForm2;
