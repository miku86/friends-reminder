import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { createMockCredentials } from "../../../utils/mockData";
import { SigninDialog } from "./SigninDialog";

describe("SigninDialog", () => {
  let signin;

  beforeEach(() => {
    signin = jest.fn().mockName("signin");
  });

  it("should run the signin function", async () => {
    const credentials = createMockCredentials();
    const { email, password } = credentials;
    const { getByLabelText } = render(
      <SigninDialog signin={signin} open={true} />
    );

    userEvent.type(getByLabelText("E-Mail"), email);
    userEvent.type(getByLabelText("Password"), password);
    await userEvent.click(getByLabelText("signin-submit"));
    expect(signin).toHaveBeenCalledWith({ email, password });
  });

  it("should show an error when signin failed", async () => {
    const { getByLabelText } = render(
      <SigninDialog authError={"error"} open={true} />
    );

    expect(getByLabelText("signin-error")).toBeInTheDocument();
  });
});
