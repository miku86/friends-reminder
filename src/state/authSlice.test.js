import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createMockCredentials } from "../utils/mockData";
import authReducer, { signup } from "./authSlice";

describe("auth", () => {
  describe("signup action", () => {
    it("should show a successful signup", async () => {
      const credentials = createMockCredentials();

      const api = {
        signup: () => Promise.resolve(),
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
});
