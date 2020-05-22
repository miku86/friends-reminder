import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Signout } from "./Signout";

describe("Signout", () => {
  let context;
  let signout;

  beforeEach(() => {
    signout = jest.fn().mockName("signout");
    context = render(<Signout signout={signout} />);
  });

  it("should show a button to signout", () => {
    const { getByLabelText } = context;
    expect(getByLabelText("signout-button")).toBeInTheDocument();
  });

  it("should run the signout function", async () => {
    const { getByLabelText } = context;

    await userEvent.click(getByLabelText("signout-button"));
    expect(signout).toHaveBeenCalled();
  });
});
