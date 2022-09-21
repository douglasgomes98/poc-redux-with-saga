import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { editUserReducer } from "../features/user/editUserSlice";
import { routerReducer } from "../middlewares/routerMiddleware";

export const reducers = combineReducers({
  counter: counterReducer,
  editUser: editUserReducer,
  router: routerReducer,
});
