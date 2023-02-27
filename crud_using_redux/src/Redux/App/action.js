import axios from "axios";
import * as types from "./actionType";

export const getBooks = (params) => (dispatch) => {
  dispatch({ type: types.GET_TODOS_LOADING });
  axios
    .get("/books", params)
    .then((res) =>
      dispatch({ type: types.GET_TODOS_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.GET_TODOS_FAILURE }));
};

//add

export const addTodosLoading = (payload) => {
  return {
    type: types.ADD_TODOS_LOADING,
    payload,
  };
};

export const addTodosSuccess = (payload) => {
  return {
    type: types.ADD_TODOS_SUCCESS,
    payload,
  };
};

export const addTodosfaliure = (payload) => {
  return {
    type: types.ADD_TODOS_FALIURE,
    payload,
  };
};
