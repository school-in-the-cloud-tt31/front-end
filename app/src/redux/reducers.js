import {
  GET_TODOS_START,
  GET_TODOS_SUCCESS,
  POST_TODO_START,
  POST_TODO_SUCCESS,
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  GET_EDIT_TODO_START,
  GET_EDIT_TODO_SUCCESS,
  EDIT_TODO_START,
  EDIT_TODO_SUCCESS,
  POST_USER_START,
  POST_USER_SUCCESS,
} from "./actions";

const INITIAL_STATE = {
  isEdit: false,
  todos: [],
  todoTobeEdit: "",
  userType: null,
  token: null,
};

export const schoolReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS_START:
      return state;
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };

    case POST_TODO_START:
      return state;
    case POST_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };

    case DELETE_TODO_START:
      return state;
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };

    case GET_EDIT_TODO_START:
      return state;
    case GET_EDIT_TODO_SUCCESS:
      return {
        ...state,
        isEdit: action.edit,
        todoTobeEdit: action.editToBe,
      };

    case EDIT_TODO_START:
      return state;
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isEdit: false,
        todoTobeEdit: "",
      };

    case POST_USER_START:
      return state;
    case POST_USER_SUCCESS:
      return {
        ...state,
        userType: action.userType,
        token: action.token,
      };

    default:
      return state;
  }
};
