import UpdateTodo from "./UpdateTodo";
import TodoList from "./TodoList";
import { connect } from "react-redux";

const Admin = ({ isEdit }) => {
  return (
    <div className="container">
      <h1>Admin</h1>
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
