import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { createMockFriend } from "../../utils/mockData";
import { FriendsList } from "./FriendsList";

describe("FriendsList", () => {
  const friends = [createMockFriend("Max"), createMockFriend("Moritz")];
  let context;
  let loadFriends;
  let deleteFriend;

  beforeEach(() => {
    loadFriends = jest.fn().mockName("loadFriends");
    deleteFriend = jest.fn().mockName("deleteFriend");
    context = render(
      <FriendsList
        loadFriends={loadFriends}
        friends={friends}
        deleteFriend={deleteFriend}
      />
    );
  });

  it("should load the friends on first render", () => {
    expect(loadFriends).toHaveBeenCalled();
  });

  it("should show the friends", () => {
    const { getByText } = context;

    friends.forEach(({ friendName }) => {
      expect(getByText(friendName)).toBeInTheDocument();
    });
  });

  it("should run the delete function", async () => {
    const { getAllByLabelText } = context;
    await userEvent.click(getAllByLabelText("delete-friend")[0]);

    expect(deleteFriend).toHaveBeenCalledWith(friends[0]["friendId"]);
  });
});
