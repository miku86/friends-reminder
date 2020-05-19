import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friendsSlice";

const store = configureStore({
  reducer: {
    friends: friendsReducer,
  }
});

export type AppDispatch = typeof store.dispatch;

export default store;
