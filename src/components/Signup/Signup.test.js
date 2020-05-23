import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithRedux } from "../../utils/testing";
import { Signup } from "./Signup";

describe("Signup", () => {
  it("should show a button to signup", () => {
    const { getByLabelText } = renderWithRedux(<Signup />);
    expect(getByLabelText("signup-button")).toBeInTheDocument();
  });

  it("should open a modal when clicking the signup button", async () => {
    const { getByLabelText } = renderWithRedux(<Signup />);
    await userEvent.click(getByLabelText("signup-button"));
    expect(getByLabelText("signup-modal")).toBeInTheDocument();
  });
});
