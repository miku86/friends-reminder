import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { createMockCredentials } from "../../utils/mockData";
import { Signin } from "./Signin";

describe("Signin", () => {
  let context;
  let signin;

  beforeEach(() => {
    signin = jest.fn().mockName("signin");
    context = render(<Signin signin={signin} />);
  });

  it("should show a button to signin", () => {
    const { getByLabelText } = context;
    expect(getByLabelText("signin-button")).toBeInTheDocument();
  });

  it("should open a modal when clicking the signin button", async () => {
    const { getByLabelText } = context;
    await userEvent.click(getByLabelText("signin-button"));
    expect(getByLabelText("signin-modal")).toBeInTheDocument();
  });

  it("should run the signin function", async () => {
    const credentials = createMockCredentials();
    const { email, password } = credentials;
    const { getByLabelText } = context;

    await userEvent.click(getByLabelText("signin-button"));
    userEvent.type(getByLabelText("E-Mail"), email);
    userEvent.type(getByLabelText("Password"), password);
    await userEvent.click(getByLabelText("signin-submit"));
    expect(signin).toHaveBeenCalledWith({ email, password });
  });
});
