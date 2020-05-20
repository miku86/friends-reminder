import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Friend } from "../utils/types";
import { AppDispatch } from "./store";

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    items: [] as Friend[],
    count: (null as unknown) as number,
  },
  reducers: {
    storeFriends: (state, action: PayloadAction<Friend[]>) => {
      state.items = action.payload;
    },
  },
});

export const { storeFriends } = friendsSlice.actions;

export const loadFriends = () => (dispatch: AppDispatch, _: any, api: any) => {
  api
    .loadFriends()
    .then((items: Friend[]) => {
      dispatch(storeFriends(items));
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export default friendsSlice.reducer;
