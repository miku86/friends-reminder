import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { AddFriend } from "./AddFriend";

describe("AddFriend", () => {
  let context;
  let addFriend;

  beforeEach(() => {
    addFriend = jest.fn().mockName("addFriend");
    context = render(<AddFriend addFriend={addFriend} userId={"111"} />);
  });

  it("should show a button to add a friend", () => {
    const { getByLabelText } = context;
    expect(getByLabelText("add-friend-button")).toBeInTheDocument();
  });

  it("should open a modal when clicking the add-friend button", async () => {
    const { getByLabelText } = context;
    await userEvent.click(getByLabelText("add-friend-button"));
    expect(getByLabelText("add-friend-modal")).toBeInTheDocument();
  });

  it("should run the add friend function", async () => {
    const { getByLabelText } = context;

    await userEvent.click(getByLabelText("add-friend-button"));
    await userEvent.click(getByLabelText("add-friend-submit"));

    expect(addFriend).toHaveBeenCalled();
  });
});
