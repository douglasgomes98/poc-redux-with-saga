import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  age: number;
}

export interface EditUserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: EditUserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const editUserSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const editUserSliceActions = editUserSlice.actions;

export const editUserReducer = editUserSlice.reducer;
