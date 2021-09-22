import { useState } from "react";

const initForm = {
  email: "",
  password: "",
  confirmPassword: "",
};
const SampleForm = () => {
  const [form, setForm] = useState(initForm);
  const [errorMessage, setError] = useState("");
  const validateForm = () => {
    let formValid = "";
    let errorMessage = "";
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(form.email).toLowerCase())) {
      errorMessage = "Please check if email is valid";
      formValid = false;
    } else if (form.email === "" || form.password === "") {
      errorMessage = "Please check email and password";
      formValid = false;
    } else if (form.password !== form.confirmPassword) {
      errorMessage = "Please recheck if password and confirm password are same";
      formValid = false;
    } else {
      formValid = true;
    }
    setError(errorMessage);
    return formValid;
  };

  const handleChange = (e) => {
    let prevForm = { ...form };
    let { value, name } = e.target;
    prevForm[name] = value;
    console.log(value, name);
    setForm(prevForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log(form);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={form.email}
          id="email"
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="psw"
          value={form.password}
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="psw-repeat">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
          id="psw-repeat"
          value={form.confirmPassword}
          required
        />
        <hr />

        <button type="submit" className="registerbtn">
          Register
        </button>
      </div>

      <div className="container signin">
        <p>Already have an account? Sign in.</p>
      </div>
      {errorMessage}
    </form>
  );
};

export default SampleForm;
