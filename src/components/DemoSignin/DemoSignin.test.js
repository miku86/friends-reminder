import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { DemoSignin } from "./DemoSignin";

describe("DemoSignin", () => {
  let signin;

  beforeEach(() => {
    signin = jest.fn().mockName("signin");
  });

  it("should show a button to signin", () => {
    const { getByLabelText } = render(<DemoSignin />);

    expect(getByLabelText("demo-signin-button")).toBeInTheDocument();
  });

  it("should run the signin function", async () => {
    const { getByLabelText } = render(<DemoSignin signin={signin} />);

    await userEvent.click(getByLabelText("demo-signin-button"));

    expect(signin).toHaveBeenCalled();
  });
});
