import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { createMockCredentials } from "../../utils/mockData";
import { Signup } from "./Signup";

describe("Signup", () => {
  let signup;

  beforeEach(() => {
    signup = jest.fn().mockName("signup");
  });

  it("should show a button to signup", () => {
    const { getByLabelText } = render(<Signup />);
    expect(getByLabelText("signup-button")).toBeInTheDocument();
  });

  it("should open a modal when clicking the signup button", async () => {
    const { getByLabelText } = render(<Signup signup={signup} />);
    await userEvent.click(getByLabelText("signup-button"));
    expect(getByLabelText("signup-modal")).toBeInTheDocument();
  });

  it("should run the signup function", async () => {
    const credentials = createMockCredentials();
    const { email, password } = credentials;
    const { getByLabelText } = render(<Signup signup={signup} />);

    await userEvent.click(getByLabelText("signup-button"));
    userEvent.type(getByLabelText("E-Mail"), email);
    userEvent.type(getByLabelText("Password"), password);
    await userEvent.click(getByLabelText("signup-submit"));
    expect(signup).toHaveBeenCalledWith({ email, password });
  });

  it("should show an error when signup failed", async () => {
    const { getByLabelText } = render(<Signup authError={"error"} />);

    await userEvent.click(getByLabelText("signup-button"));

    expect(getByLabelText("signup-error")).toBeInTheDocument();
  });
});
