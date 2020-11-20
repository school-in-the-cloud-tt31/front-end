import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const StyledVolunteer = styled.div`
  .title {
    margin: 0;
    padding: 1%;
    background-color: #2e2e2e;
    color: white;
    text-align: center;
  }
  .todo-list {
    display: flex;
    flex-wrap: wrap;
    margin: 1% auto;
    width: 50%;
  }
`;

const StyledCard = styled.div`
  border: 1px solid #dedede;
  border-radius: 10px;
  box-shadow: 5px 5px 13px -6px #000000;
  width: 30%;
  padding: 3%;
  margin: 10px auto;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.5rem;
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
        <h2>Volunteer Dashboard</h2>
      </div>
      <div className="todo-list">
        {todoList.map((todo) => {
          return (
            <StyledCard>
              <p className="todo">{todo.task_name}</p>
            </StyledCard>
          );
        })}
      </div>
    </StyledVolunteer>
  );
};

export default Volunteer;
