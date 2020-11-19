import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import schema from "../validation/signUpSchema";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSignUp = styled.form`
  width: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  label {
    margin-top: 7px;
    margin-bottom: 3px;
  }

  input {
    padding: 5px;
  }

  button {
    width: 20%;
    margin: 15px auto;
    border: none;
    border-radius: 3px;
    background-color: #2e2e2e;
    color: white;
    padding: 10px;
  }

  select {
    width: 40%;
    padding: 5px;
  }

  p {
    text-align: center;
  }
`;

const initialFormValues = {
  email: "",
  name: "",
  password: "",
  role: "",
  country: "",
};

const initialFormErrors = {
  name: "",
  password: "",
  email: "",
  role: "",
  country: "",
};

export default function SignUp(props) {
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

    const newUser = {
      email: formValues.email,
      name: formValues.name,
      password: formValues.password,
      role: formValues.role,
      country: formValues.country,
    };

    axios
      .post(
        "https://schoolinthecloudtt31.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        localStorage.setItem("token", res.data.payload.token);
      })
      .catch((err) => {
        debugger;
      });

    setFormValues(initialFormValues);
  };

  return (
    <StyledSignUp onSubmit={handleSubmit}>
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

      <label htmlFor="country">Country</label>
      <input
        id="country"
        type="text"
        name="country"
        placeholder="Enter country"
        value={formValues.country}
        onChange={handleChange}
      />
      <div>{formErrors.country}</div>
      <button type="submit">Sign Up</button>
      <p>
        Already a member? <Link to="/login">Sign in</Link>
      </p>
    </StyledSignUp>
  );
}
