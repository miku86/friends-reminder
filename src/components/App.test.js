import { render } from "@testing-library/react";
import React from "react";
import { createMockFriend } from "../utils/mockData";
import { App } from "./App";

describe("App", () => {
  const friends = [
    createMockFriend("Max"),
    createMockFriend("Moritz")
  ];
  let loadFriends;
  let context;

  beforeEach(()=>{
    loadFriends = jest.fn().mockName("loadFriends");
    context = render(<App loadFriends={loadFriends} friends={friends} />);
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
