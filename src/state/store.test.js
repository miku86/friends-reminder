import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createMockFriend } from "../utils/mockData";
import friendsReducer, { deleteFriend, loadFriends } from "./friendsSlice";

describe("store", () => {
  describe("loadFriends action", () => {
    it("should store the friends in the store", async () => {
      const friends = [createMockFriend("Max")];
      const api = {
        loadFriends: () => Promise.resolve(friends),
      };

      const store = configureStore({
        reducer: friendsReducer,
        preloadedState: {
          items: [],
        },
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
        ],
      });

      await store.dispatch(loadFriends());

      expect(store.getState().items).toEqual(friends);
    });
  });

  describe("deleteFriend action", () => {
    it("should delete the friend from the store", async () => {
      const friends = [createMockFriend("Max"), createMockFriend("Hans")];

      const expectedState = friends.slice(1);

      const api = {
        deleteFriend: () => Promise.resolve(friends),
      };

      const store = configureStore({
        reducer: friendsReducer,
        preloadedState: {
          items: friends,
        },
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
        ],
      });

      await store.dispatch(deleteFriend(friends[0]["docId"]));

      expect(store.getState().items).toEqual(expectedState);
    });
  });
});
