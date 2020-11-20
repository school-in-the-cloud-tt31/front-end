import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const inputChange = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="add-task"
        name="task"
        value={todo}
        type="text"
        placeholder="Add new task..."
        onChange={inputChange}
      />
      <button type="submit" className="add-task-btn">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

const matchDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, matchDispatchToProps)(TodoForm);
