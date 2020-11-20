import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";
import { editTodoState } from "../redux/actions";
import styled from "styled-components";

const StyledTodo = styled.div`
  button {
    margin: 0 15px;
    border: none;
    border-radius: 3px;
    background-color: #2e2e2e;
    color: white;
    padding: 10px;
  }

  .btns {
    text-align: center;
  }

  .card {
    display: flex;
    justify-content: space-between;
    margin: 15px;
    border: 1px solid #dedede;
    border-radius: 10px;
    box-shadow: 5px 5px 13px -6px #000000;
    width: 25%;
    padding: 1%;
    margin: 10px auto;
    text-transform: capitalize;
  }

  .title {
    padding: 0 10px;
  }

  .date {
    margin: 0 15px;
  }

  hr {
    width: 5%;
    margin: 20px auto;
  }
`;

const Todo = ({ todo, deleteTodo, editTodoState }) => {
  return (
    <StyledTodo>
      <hr />
      <div className="card">
        <div className="title">
          <h5>TASK</h5>
          <p>{todo.task_name}</p>
        </div>
        <div className="date">
          <h5>PUBLISHED DATE</h5>
          <p>{todo.publish_date}</p>
        </div>
      </div>
      <div className="btns">
        <button onClick={() => editTodoState(todo.id)}>EDIT</button>
        <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
      </div>
    </StyledTodo>
  );
};

const matchDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodoState: (id) => dispatch(editTodoState(id)),
  };
};

export default connect(null, matchDispatchToProps)(Todo);
