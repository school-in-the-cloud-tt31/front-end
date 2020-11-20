import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editTodo } from "../redux/actions";

const todoUpdateValue = {
  id: "",
  task_name: "",
  publish_date: "",
};

const UpdateTodo = ({ todoTobeEdit, editTodo }) => {
  const [todo, setTodo] = useState(todoUpdateValue);

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
    const updatedTodo = {
      id: todo.id,
      task_name: todo.task_name,
      publish_date: todo.publish_date,
    };
    console.log(todo);
    editTodo(todo);
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="add-task"
        name="task"
        value={todo.task_name}
        type="text"
        placeholder="Edit a task..."
        onChange={inputChange}
      />
      <button type="submit" className="add-task-btn">
        <i class="fas fa-plus"></i>
      </button>
    </form>
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
