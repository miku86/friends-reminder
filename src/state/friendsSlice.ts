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
    removeFriend: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(friend => friend.docId !== action.payload)
    },
    storeFriends: (state, action: PayloadAction<Friend[]>) => {
      state.items = action.payload;
    },
  },
});

export const { removeFriend, storeFriends } = friendsSlice.actions;

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

export const deleteFriend = (docId: string) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  api
    .deleteFriend(docId)
    .then(() => {
      dispatch(removeFriend(docId))
    })
    .catch((error: any) => {
      console.error("Error removing document: ", error);
    });
};

export default friendsSlice.reducer;
