import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const GET_TODOS_START = "GET_TODOS_START";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";

export const POST_TODO_START = "POST_TODO_START";
export const POST_TODO_SUCCESS = "POST_TODO_SUCCESS";

export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";

export const GET_EDIT_TODO_START = "GET_EDIT_TODO_START";
export const GET_EDIT_TODO_SUCCESS = "GET_EDIT_TODO_SUCCESS";

export const EDIT_TODO_START = "EDIT_TODO_START";
export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";

export const POST_USER_START = "POST_USER_START";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";

export const getTodos = () => {
  return (dispatch) => {
    dispatch({ type: GET_TODOS_START });
    axiosWithAuth()
      .get("/api/tasks")
      .then((res) => {
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
      });
  };
};

export const addTodo = (newTodo) => {
  return (dispatch) => {
    dispatch({ type: POST_TODO_START });
    axiosWithAuth()
      .post("/api/tasks/newtask", {
        task_name: newTodo,
      })
      .then(() => {
        axiosWithAuth()
          .get("/api/tasks")
          .then((res) => {
            dispatch({ type: POST_TODO_SUCCESS, payload: res.data });
          });
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TODO_START });
    axiosWithAuth()
      .delete(`/api/tasks/${id}`)
      .then(() => {
        axiosWithAuth()
          .get("/api/tasks")
          .then((res) => {
            dispatch({ type: DELETE_TODO_SUCCESS, payload: res.data });
          });
      });
  };
};

export const editTodoState = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_EDIT_TODO_START });
    axiosWithAuth()
      .get(`/api/tasks/${id}`)
      .then((res) => {
        dispatch({
          type: GET_EDIT_TODO_SUCCESS,
          edit: true,
          editToBe: res.data,
        });
      });
  };
};

export const editTodo = (todo) => {
  return (dispatch) => {
    dispatch({ type: EDIT_TODO_START });
    axiosWithAuth()
      .put(`/api/tasks/${todo.id}`, todo)
      .then(() => {
        axiosWithAuth()
          .get("/api/tasks")
          .then((res) => {
            dispatch({ type: EDIT_TODO_SUCCESS, payload: res.data });
          });
      });
  };
};

export const signIn = (login) => {
  return (dispatch) => {
    dispatch({ type: POST_USER_START });
    axios
      .post(
        "https://school-in-cloud-lambda.herokuapp.com/api/auth/login",
        login
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userType", res.data.usertype);
        dispatch({
          type: POST_USER_SUCCESS,
          token: res.data.token,
          userType: res.data.usertype,
        });
      })
      .catch((err) => console.log(err));
  };
};
