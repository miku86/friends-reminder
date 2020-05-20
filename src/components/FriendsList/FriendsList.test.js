import { render } from "@testing-library/react";
import React from "react";
import { createMockFriend } from "../../utils/mockData";
import { FriendsList } from "./FriendsList";

describe("FriendsList", () => {
  const friends = [
    createMockFriend("Max"),
    createMockFriend("Moritz")
  ];
  let loadFriends;
  let context;

  beforeEach(()=>{
    loadFriends = jest.fn().mockName("loadFriends");
    context = render(<FriendsList loadFriends={loadFriends} friends={friends} />);
  })

  it("should load the friends on first render", () => {
    expect(loadFriends).toHaveBeenCalled();
  });

  it("should show the friends", () => {
    const { getByText } = context;

    friends.forEach(({friendName}) => {
      expect(getByText(friendName)).toBeInTheDocument();
    });
  });
});
