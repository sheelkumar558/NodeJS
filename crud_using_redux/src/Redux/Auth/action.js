import axios from "axios";
import * as types from "./actionType";

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((res) =>
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.USER_LOGIN_FAILURE }));
};
