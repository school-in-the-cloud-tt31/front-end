import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";
import { editTodoState } from "../redux/actions";
const Todo = ({ todo, deleteTodo, editTodoState }) => {
  return (
    <div>
      <button onClick={() => editTodoState(todo.id)} className="edit-btn">
        EDIT<i className="fas fa-edit"></i>
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        DELETE<i className="fas fa-trash"></i>
      </button>
      <div className="table-row">
        <div className="id-cont">
          <div className="id-title">ID</div>
          <div className="id-value">{todo.id}</div>
        </div>
        <div className="task-cont">
          <div className="task-title">TASK</div>
          <div className="task-value">{todo.task_name}</div>
        </div>
        <div className="date-cont">
          <div className="date-title">PUBLISHED DATE</div>
          <div className="date-value">{todo.publish_date}</div>
        </div>
      </div>
    </div>
  );
};

const matchDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodoState: (id) => dispatch(editTodoState(id)),
  };
};

export default connect(null, matchDispatchToProps)(Todo);
