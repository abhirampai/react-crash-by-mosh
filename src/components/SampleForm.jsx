import { useState } from "react";

const initForm = {
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
  favorite_language: "",
};
const SampleForm = () => {
  const [form, setForm] = useState(initForm);
  const [errorMessage, setError] = useState("");
  const validateForm = () => {
    let formValid = "";
    let errorMessage = "";
    if (form.email === "" || form.password === "") {
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
          type="email"
          placeholder="Enter Email"
          name="email"
          value={form.email}
          id="email"
          onChange={(e) => handleChange(e)}
        
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
        
        />
        <hr />

        <label htmlFor="role">Choose Role:</label>
        <select onChange={(e) => handleChange(e)} name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="professional">Professional</option>
        </select>
        <hr />

        <label htmlFor="favorite_language">Favorite Language</label>
        <br/>
        <input
          onChange={(e) => handleChange(e)}
          type="radio"
          id="html"
          name="favorite_language"
          value="HTML"
        />
        <label htmlFor="html">HTML</label>
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="radio"
          id="css"
          name="favorite_language"
          value="CSS"
        />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="radio"
          id="javascript"
          name="favorite_language"
          value="JavaScript"
        />
        <label htmlFor="javascript">JavaScript</label>

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
