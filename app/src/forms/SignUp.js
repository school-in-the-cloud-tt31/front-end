import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import schema from "../validation/signUpSchema";

const initialFormValues = {
  email: "",
  name: "",
  password: "",
  role: "",
};

const initialFormErrors = {
  name: "",
  password: "",
  email: "",
  role: "",
};

export default function SignUp() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const valueToUse = name === "role" ? parseInt(value, 10) : value;

    yup
      .reach(schema, name)
      .validate(valueToUse)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: valueToUse });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://schoolinthecloudtt31.herokuapp.com/api/auth/register", {
        email: "testing@email.com",
        password: "test123",
        name: "testing",
        role: 3,
        country: "mexico",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formValues.email}
        onChange={handleChange}
      />
      <div>{formErrors.email}</div>
      <label htmlFor="name">Username</label>
      <input
        id="name"
        name="name"
        type="name"
        placeholder="Enter your username"
        value={formValues.name}
        onChange={handleChange}
      />
      <div>{formErrors.name}</div>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formValues.password}
        onChange={handleChange}
      />
      <div>{formErrors.password}</div>
      <label htmlFor="role">Role</label>
      <select
        onChange={handleChange}
        value={formValues.role}
        name="role"
        id="role"
      >
        <option value="0">---Select a role---</option>
        <option value="1">Student</option>
        <option value="2">Admin</option>
        <option value="3">Volunteer</option>
      </select>
      <div>{formErrors.role}</div>

      <button type="submit">Sign Up</button>
    </form>
  );
}
