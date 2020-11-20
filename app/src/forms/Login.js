import React, { useState } from "react";
import * as yup from "yup";
import { signIn } from "../redux/actions";
import schema from "../validation/loginSchema";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

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
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

function Login({ signIn, userType }) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const history = useHistory();

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
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    signIn(returnUser);

    setFormValues(initialFormValues);
  };

  return (
    <StyledLogin onSubmit={handleSubmit}>
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
      {userType ? (
        <button onClick={() => history.push(`/${userType}`)}>
          Take me to {userType}!
        </button>
      ) : (
        ""
      )}
      <p>
        Not a member? <Link to="/">Sign up</Link>
      </p>
    </StyledLogin>
  );
}

const matchStateToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user)),
  };
};

const mapStateToProps = (state) => {
  const { userType } = state;
  return {
    userType,
  };
};

export default connect(mapStateToProps, matchStateToProps)(Login);
