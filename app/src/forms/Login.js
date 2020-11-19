import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import schema from "../validation/loginSchema";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogin = styled.form`
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

  p {
    text-align: center;
  }
`;

const initialFormValues = {
  name: "",
  password: "",
};

const initialFormErrors = {
  name: "",
  password: "",
};

export default function Login(props) {
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

    let returnUser = {
      name: formValues.name,
      password: formValues.password,
    };

    axios
      .post(URL_HERE, returnUser)
      .then((res) => {
        localStorage.setItem("token", res.data.payload.token);
      })
      .catch((err) => {
        debugger;
      });

    setFormValues(initialFormValues);
  };

  return (
    <StyledLogin onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label htmlFor="name">Username</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Username"
        value={formValues.name}
        onChange={handleChange}
      />
      <div>{formErrors.name}</div>
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
      <p>
        Not a member? <Link to="/">Sign up</Link>Sign up
      </p>
    </StyledLogin>
  );
}
