import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { createMockCredentials } from "../../utils/mockData";
import { SignupDialog } from "../SignupDialog/SignupDialog";

describe("SignupDialog", () => {
  let signup;

  beforeEach(() => {
    signup = jest.fn().mockName("signup");
  });

  it("should run the signup function", async () => {
    const credentials = createMockCredentials();
    const { email, password } = credentials;
    const { getByLabelText } = render(
      <SignupDialog signup={signup} open={true} />
    );

    userEvent.type(getByLabelText("E-Mail"), email);
    userEvent.type(getByLabelText("Password"), password);
    await userEvent.click(getByLabelText("signup-submit"));
    expect(signup).toHaveBeenCalledWith({ email, password });
  });

  it("should show an error when signup failed", async () => {
    const { getByLabelText } = render(
      <SignupDialog authError={"error"} open={true} />
    );

    expect(getByLabelText("signup-error")).toBeInTheDocument();
  });
});
