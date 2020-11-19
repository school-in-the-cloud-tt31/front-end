import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_VOLUNTEERS_START = "GET_VOLUNTEERS_START";
export const GET_VOLUNTEERS_SUCCESS = "GET_VOLUNTEERS_SUCCESS";
export const GET_VOLUNTEERS_FAILURE = "GET_VOLUNTEERS_FAILURE";

export const GET_TASKS_START = "GET_TASKS_START";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";

export const POST_TASKS_START = "POST_TASKS_START";
export const POST_TASKS_SUCCESS = "POST_TASKS_SUCCESS";
export const POST_TASKS_FAILURE = "POST_TASKS_FAILURE";

export const EDIT_TASK_START = "EDIT_TASK_START";
export const EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS";
export const EDIT_TASK_FAILURE = "EDIT_TASK_FAILURE";

export const DELETE_TASK_START = "DELETE_TASK_START";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export const fetchVolunteers = () => (dispatch) => {
  dispatch({ type: GET_VOLUNTEERS_START });

  axiosWithAuth()
    .get(URLHERE)
    .then((res) => {
      dispatch({ type: GET_VOLUNTEERS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_VOLUNTEERS_FAILURE, payload: err.message });
    });
};

export const fetchTasks = () => (dispatch) => {
  dispatch({ type: GET_TASKS_START });

  axiosWithAuth()
    .get(URLHERE)
    .then((res) => {
      dispatch({ type: GET_TASKS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_TASKS_FAILURE, payload: err.message });
    });
};

export const postTasks = (task) => (dispatch) => {
  dispatch({ type: POST_TASKS_START });

  axiosWithAuth()
    .post(URLHERE, task)
    .then((res) => {
      dispatch({ type: POST_TASKS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_TASKS_FAILURE, payload: err.message });
    });
};

export const editTask = (task, id) => (dispatch) => {
  dispatch({ type: EDIT_TASK_START });

  axiosWithAuth()
    .put(URLHERE(including - id), task)
    .then((res) => {
      dispatch({ type: EDIT_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: EDIT_TASK_FAILURE, payload: err.message });
    });
};

export const deleteTask = (id) => (dispatch) => {
  dispatch({ type: DELETE_TASK_START });

  axiosWithAuth()
    .put(URLHERE(including - id))
    .then((res) => {
      dispatch({ type: DELETE_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_TASK_FAILURE, payload: err.message });
    });
};
