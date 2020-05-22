import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createMockCredentials } from "../utils/mockData";
import authReducer, { signin, signout, signup } from "./authSlice";

describe("auth", () => {
  describe("signup action", () => {
    it("should show a successful signup", async () => {
      const credentials = createMockCredentials();

      const api = {
        signup: () => Promise.resolve({ user: { uid: "123" } }),
      };

      const store = configureStore({
        reducer: authReducer,
        preloadedState: {},
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
        ],
      });

      await store.dispatch(signup(credentials));

      expect(store.getState().isAuthenticated).toEqual(true);
    });

    it("should show an unsuccessful signup", async () => {
      const credentials = createMockCredentials();

      const api = {
        signup: () => Promise.reject(),
      };

      const store = configureStore({
        reducer: authReducer,
        preloadedState: {},
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
        ],
      });

      await store.dispatch(signup(credentials));

      expect(store.getState().isAuthenticated).toEqual(undefined);
    });
  });
  describe("signin action", () => {
    it("should show a successful signin", async () => {
      const credentials = createMockCredentials();

      const api = {
        signin: () => Promise.resolve({ user: { uid: "123" } }),
      };

      const store = configureStore({
        reducer: authReducer,
        preloadedState: {},
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
        ],
      });

      await store.dispatch(signin(credentials));

      expect(store.getState().isAuthenticated).toEqual(true);
    });

    it("should show an unsuccessful signin", async () => {
      const credentials = createMockCredentials();

      const api = {
        signin: () => Promise.reject(),
      };

      const store = configureStore({
        reducer: authReducer,
        preloadedState: {},
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
        ],
      });

      await store.dispatch(signin(credentials));

      expect(store.getState().isAuthenticated).toEqual(undefined);
    });
  });

  describe("signout action", () => {
    it("should show a successful signout", async () => {
      const api = {
        signout: () => Promise.resolve(),
      };

      const store = configureStore({
        reducer: authReducer,
        preloadedState: {},
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
        ],
      });

      await store.dispatch(signout());

      expect(store.getState().isAuthenticated).toEqual(false);
    });
  });
});
