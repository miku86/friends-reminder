import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, Credentials } from "../utils/types";
import { AppDispatch } from "./store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    uid: null,
    authError: null,
  } as AuthState,
  reducers: {
    isAuthenticated: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.uid = action.payload;
      state.authError = null;
    },
    isNotAuthenticated: (state) => {
      state.isAuthenticated = false;
      state.uid = null;
      state.authError = null;
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.authError = action.payload;
    },
  },
});

export const {
  isAuthenticated,
  isNotAuthenticated,
  setAuthError,
} = authSlice.actions;

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
      dispatch(setAuthError(error.message));
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
      dispatch(
        setAuthError(
          "This didn't work... Did you enter the correct e-mail and password?"
        )
      );
    });
};

export const signout = () => (dispatch: AppDispatch, _: any, api: any) => {
  api
    .signout()
    .then(() => {
      dispatch(isNotAuthenticated());
    })
    .catch((error: firebase.auth.AuthError) => {
      dispatch(setAuthError(error.message));
    });
};

export default authSlice.reducer;
