import { createFilter as createFilterFn } from "redux-persist-transform-filter";
import { EditUserState } from "../features/user/editUserSlice";
import { RootState } from "../store";

function createFilter<S, M>(store: keyof S, keys: Array<keyof M>) {
  return createFilterFn(store as string, keys as string[]);
}

const editUserFilter = createFilter<RootState, EditUserState>("editUser", [
  "isLoading",
  "error",
]);

export const persistFilters: any[] = [editUserFilter];
