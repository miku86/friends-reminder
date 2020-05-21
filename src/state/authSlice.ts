import { createSlice } from "@reduxjs/toolkit";
import { Credentials } from "../utils/types";
import { AppDispatch } from "./store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    isAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { isAuthenticated } = authSlice.actions;

export const signup = (credentials: Credentials) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  api
    .signup(credentials)
    .then(() => {
      dispatch(isAuthenticated());
    })
    .catch((error: any) => {
      console.error("Error while signing up: ", error);
    });
};

export default authSlice.reducer;
