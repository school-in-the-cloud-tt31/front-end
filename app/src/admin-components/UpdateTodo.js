import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editTodo } from "../redux/actions";
import styled from "styled-components";

const StyledEdit = styled.form`
  text-align: center;

  input {
    padding: 7px;
    width: 30%;
  }

  button {
    margin: 15px;
    border: none;
    border-radius: 3px;
    background-color: #2e2e2e;
    color: white;
    padding: 10px;
  }
`;

const editInitialValue = {
  id: "",
  task_name: "",
  publish_date: "",
};

const UpdateTodo = ({ todoTobeEdit, editTodo }) => {
  const [todo, setTodo] = useState(editInitialValue);

  useEffect(() => {
    setTodo(todoTobeEdit[0]);
  }, [todoTobeEdit[0]]);

  const inputChange = (e) => {
    const { value } = e.target;
    setTodo({
      ...todo,
      task_name: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo);
  };

  return (
    <StyledEdit onSubmit={handleSubmit}>
      <input
        name="todo"
        value={todo.task_name}
        type="text"
        placeholder="Edit a todo..."
        onChange={inputChange}
      />
      <button type="submit">Edit</button>
    </StyledEdit>
  );
};

const mapStateToProps = (state) => {
  const { todoTobeEdit } = state;
  return {
    todoTobeEdit,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    editTodo: (todo) => dispatch(editTodo(todo)),
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(UpdateTodo);
