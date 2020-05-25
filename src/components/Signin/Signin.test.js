import userEvent from "@testing-library/user-event";
import React from "react";
import { createMockCredentials } from "../../utils/mockData";
import { renderWithRedux } from "../../utils/testing";
import { Signin } from "./Signin";

describe("Signin", () => {
  let signin;

  beforeEach(() => {
    signin = jest.fn().mockName("signin");
  });

  it("should show a button to signin", () => {
    const { getByLabelText } = renderWithRedux(<Signin />);

    expect(getByLabelText("signin-button")).toBeInTheDocument();
  });

  it("should open a modal when clicking the signin button", async () => {
    const { getByLabelText } = renderWithRedux(<Signin />);
    await userEvent.click(getByLabelText("signin-button"));

    expect(getByLabelText("modal")).toBeInTheDocument();
  });

  it("should run the signin function", async () => {
    const credentials = createMockCredentials();
    const { email, password } = credentials;
    const { getByLabelText } = renderWithRedux(<Signin signin={signin} />);

    await userEvent.click(getByLabelText("signin-button"));
    userEvent.type(getByLabelText("E-Mail"), email);
    userEvent.type(getByLabelText("Password"), password);
    await userEvent.click(getByLabelText("submit"));

    expect(signin).toHaveBeenCalledWith({ email, password });
  });
});
