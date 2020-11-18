import React, { useState } from "react";
import * as yup from "yup";
import schema from "../validation/loginSchema";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Username"
        value={formValues.username}
        onChange={handleChange}
      />
      <div>{formErrors.username}</div>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        value={formValues.password}
        onChange={handleChange}
      />
      <div>{formErrors.password}</div>
      <button type="submit">Login</button>
    </form>
  );
}
