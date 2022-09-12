import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { editUserReducer } from "../features/user/editUserSlice";
import { routerReducer } from "../middlewares/routerMiddleware";
import { pokemonApi } from "../services/pokemon";

export const reducers = combineReducers({
  counter: counterReducer,
  editUser: editUserReducer,
  router: routerReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});
