import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Friend, NewFriend, UserId } from "../utils/types";
import { AppDispatch } from "./store";

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    items: [] as Friend[],
    count: (null as unknown) as number,
  },
  reducers: {
    createFriend: (state, action: PayloadAction<Friend>) => {
      state.items = state.items.concat(action.payload);
    },
    removeFriend: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (friend) => friend.docId !== action.payload
      );
    },
    storeFriends: (state, action: PayloadAction<Friend[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  createFriend,
  removeFriend,
  storeFriends,
} = friendsSlice.actions;

export const loadFriends = (userId: UserId) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  api
    .loadFriends(userId)
    .then((items: Friend[]) => {
      dispatch(storeFriends(items));
    })
    .catch((error: any) => {
      console.error("Error getting friends: ", error);
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
      dispatch(removeFriend(docId));
    })
    .catch((error: any) => {
      console.error("Error removing friend: ", error);
    });
};

export const addFriend = (newFriend: NewFriend) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  api
    .addFriend(newFriend)
    .then((friend: Friend) => {
      dispatch(createFriend(friend));
    })
    .catch((error: any) => {
      console.error("Error adding friend: ", error);
    });
};

export default friendsSlice.reducer;
