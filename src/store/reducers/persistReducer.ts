import { Reducer } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistFilters } from "./persistFilters";
import { RootState } from "../store";

const whitelist: Array<keyof RootState> = ["editUser", "counter"];

export const persistReducers = (reducers: Reducer) =>
  persistReducer(
    {
      key: "key/storage",
      storage,
      whitelist: whitelist as string[],
      stateReconciler: autoMergeLevel2,
      transforms: [...persistFilters],
    },
    reducers
  );
