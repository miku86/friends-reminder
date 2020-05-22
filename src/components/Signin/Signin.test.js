import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import {
  createMockCredentials,
  createWrongCredentials,
} from "../../utils/mockData";
import { Signin } from "./Signin";

describe("Signin", () => {
  let signin;

  beforeEach(() => {
    signin = jest.fn().mockName("signin");
  });

  it("should show a button to signin", () => {
    const { getByLabelText } = render(<Signin />);

    expect(getByLabelText("signin-button")).toBeInTheDocument();
  });

  it("should open a modal when clicking the signin button", async () => {
    const { getByLabelText } = render(<Signin />);
    await userEvent.click(getByLabelText("signin-button"));

    expect(getByLabelText("signin-modal")).toBeInTheDocument();
  });

  it("should run the signin function", async () => {
    const credentials = createMockCredentials();
    const { email, password } = credentials;
    const { getByLabelText } = render(<Signin signin={signin} />);

    await userEvent.click(getByLabelText("signin-button"));
    userEvent.type(getByLabelText("E-Mail"), email);
    userEvent.type(getByLabelText("Password"), password);
    await userEvent.click(getByLabelText("signin-submit"));

    expect(signin).toHaveBeenCalledWith({ email, password });
  });

  it("should show an error when signin failed", async () => {
    const wrongCredentials = createWrongCredentials();
    const { email, password } = wrongCredentials;
    const { getByLabelText } = render(
      <Signin signin={signin} authError={"error"} />
    );

    await userEvent.click(getByLabelText("signin-button"));
    userEvent.type(getByLabelText("E-Mail"), email);
    userEvent.type(getByLabelText("Password"), password);
    await userEvent.click(getByLabelText("signin-submit"));

    expect(getByLabelText("signin-error")).toBeInTheDocument();
  });
});
