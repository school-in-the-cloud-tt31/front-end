import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const StyledVolunteer = styled.div`
  .title {
    margin: 1%;
    font-size: 10rem;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    margin: 1%;
    width: 50%;
  }
  .todo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    margin: 2%;
    font-size: 2.5rem;
  }
  h2 {
    width: 80%;
  }
  input {
    width: 20%;
  }
  .active {
    background: red;
    text-decoration: line-through;
  }
`;

const Volunteer = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/tasks")
      .then((res) => {
        console.log(res.data);
        setTodoList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledVolunteer>
      <div className="title">
        <h2>To-Do List</h2>
      </div>
      <div className="todo-list">
        {todoList.map((todo) => {
          return <div>{todo.task_name}</div>;
        })}
      </div>
    </StyledVolunteer>
  );
};

export default Volunteer;
