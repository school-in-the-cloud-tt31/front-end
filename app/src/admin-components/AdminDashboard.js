import UpdateTodo from "./UpdateTodo";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 0;
  padding: 1%;
  background-color: #2e2e2e;
  color: white;
  text-align: center;
  font-size: 3rem;
`;

const Admin = ({ isEdit }) => {
  return (
    <div className="container">
      <StyledHeader>Admin</StyledHeader>
      {isEdit ? <UpdateTodo /> : ""}
      <TodoList />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isEdit } = state;
  return {
    isEdit,
  };
};

export default connect(mapStateToProps, {})(Admin);
