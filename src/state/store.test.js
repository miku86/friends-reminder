import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createMockFriend } from "../utils/mockData";
import friendsReducer, { loadFriends } from "./friendsSlice";

describe("store", () => {
  describe("loadFriends action", () => {
    it("should store the friends in the store", async () => {
      const friends = [createMockFriend("Max"), createMockFriend("Moritz")];

      const initialState = {
        items: [],
      };

      const api = {
        loadFriends: () => Promise.resolve(friends),
      };

      const store = configureStore({
        reducer: friendsReducer,
        preloadedState: initialState,
        middleware: [
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: api
            },
          })
        ]
      });

      await store.dispatch(loadFriends());

      expect(store.getState().items).toEqual(friends);
    });
  });
});
