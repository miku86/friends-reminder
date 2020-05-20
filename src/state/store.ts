import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "../utils/api";
import friendsReducer from "./friendsSlice";

const store = configureStore({
  reducer: {
    friends: friendsReducer
  },
  middleware: [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
  ]
});

export type AppDispatch = typeof store.dispatch;

export default store;