import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledAdd = styled.form`
  text-align: center;

  input {
    padding: 7px;
    width: 30%;
  }

  button {
    margin: 10px 15px;
    border: none;
    border-radius: 3px;
    background-color: #2e2e2e;
    color: white;
    padding: 10px;
  }
`;

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const inputChange = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <StyledAdd onSubmit={handleSubmit}>
      <input
        name="todo"
        value={todo}
        type="text"
        placeholder="Add new todo..."
        onChange={inputChange}
      />
      <button type="submit">Add</button>
    </StyledAdd>
  );
};

const matchDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, matchDispatchToProps)(TodoForm);
