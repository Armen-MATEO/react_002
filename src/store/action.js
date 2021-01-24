import request from "../Helpers/request";
import * as actionTypes from "./actionTypes";

const apiUrl = process.env.REACT_APP_API_URL;

//action creator

export function getTasks(data = {}) {
  let url = `${apiUrl}/task`;

  let query = "?";
  for (let key in data) {
    let value = data[key];
    query = `${query}${key}=${value}&`;
  }

  if (query === "?") {
    query = "";
  }

  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    request(url + query)
      .then((res) => {
        dispatch({ type: actionTypes.GET_TASKS_SUCCESS, tasks: res });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ERROR, error: err.message });
      });
  };
}

export function getSingleTask(taskId) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    request(`${apiUrl}/task/${taskId}`)
      .then((res) => {
        dispatch({ type: actionTypes.GET_SINGLE_TASK_SUCCESS, task: res });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ERROR, error: err.message });
      });
  };
}

export function addTask(data) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    request(`${apiUrl}/task`, "POST", data)
      .then((res) => {
        dispatch({ type: actionTypes.ADD_TASK_SUCCESS, task: res });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ERROR, error: err.message });
      });
  };
}

export function removeTask(taskId, from = "tasks") {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    request(`${apiUrl}/task/${taskId}`, "DELETE")
      .then((res) => {
        dispatch({ type: actionTypes.REMOVE_TASK_SUCCESS, taskId, from });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ERROR, error: err.message });
      });
  };
}

export function removeSelected(taskIds) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    request(`${apiUrl}/task`, "PATCH", { tasks: taskIds })
      .then(() => {
        dispatch({ type: actionTypes.REMOVE_SELECTED_TASKS_SUCCESS, taskIds });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ERROR, error: err.message });
      });
  };
}

export function editTask(data, from) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    request(`${apiUrl}/task/${data._id}`, "PUT", data)
      .then((editedTask) => {
        dispatch({
          type: actionTypes.EDIT_TASK_SUCCESS,
          task: editedTask,
          from,
        });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ERROR, error: err.message });
      });
  };
}
export function changeTaskStatus(id, data, from) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    request(`${apiUrl}/task/${id}`, "PUT", data)
      .then((editedTask) => {
        dispatch({
          type: actionTypes.CHANGE_TASK_STATUS_SUCCESS,
          task: editedTask,
          from,
        });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ERROR, error: err.message });
      });
  };
}

export function sendFormMessage(formText) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    const url = `${apiUrl}/form`;
    request(url, "POST", formText)
      .then((res) => {
        dispatch({
          type: actionTypes.SEND_FORM_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.ERROR,

          error:
            "something goes wrong!, please check your forms or your internet conection ",
        });
      });
  };
}
