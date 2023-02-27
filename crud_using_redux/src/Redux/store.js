import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { reducer as AppReducer } from "./App/reducer";
import { authReducer as Auth } from "./Auth/authReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ AppReducer, Auth });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
