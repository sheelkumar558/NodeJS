import * as types from "./actionType";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODOS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_TODOS_SUCCESS: {
      return {
        ...state,
        books: payload,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_TODOS_FALIURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.ADD_TODOS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_TODOS_SUCCESS: {
      return {
        ...state,
        books: payload,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_TODOS_FALIURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
