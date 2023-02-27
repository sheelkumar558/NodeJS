import * as types from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    default:
      return state;
  }
};
