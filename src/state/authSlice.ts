import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Credentials } from "../utils/types";
import { AppDispatch } from "./store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    uid: (null as unknown) as string,
  },
  reducers: {
    isAuthenticated: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.uid = action.payload;
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
    .then((result: firebase.auth.UserCredential) => {
      if (result.user?.uid) {
        dispatch(isAuthenticated(result.user.uid));
      }
    })
    .catch((error: firebase.auth.AuthError) => {
      console.error("Error while signing up: ", error);
    });
};

export const signin = (credentials: Credentials) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  api
    .signin(credentials)
    .then((result: firebase.auth.UserCredential) => {
      if (result.user?.uid) {
        dispatch(isAuthenticated(result.user.uid));
      }
    })
    .catch((error: firebase.auth.AuthError) => {
      console.error("Error while signing in: ", error);
    });
};

export default authSlice.reducer;
