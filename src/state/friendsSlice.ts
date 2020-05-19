import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Friend, FriendsState } from "../utils/types";
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
      state.count = action.payload.length;
    },
  },
});

export const { storeFriends } = friendsSlice.actions;

export const getFriends = () => (dispatch: AppDispatch, _: any, api: any) => {};

export const selectFriends = (state: FriendsState) => state.items;

export default friendsSlice.reducer;
