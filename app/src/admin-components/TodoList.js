import React, { useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";

import { getTodos } from "../redux/actions";

const TodoList = ({ todos, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <TodoForm />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { todos } = state;
  return {
    todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
