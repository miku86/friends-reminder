import React from "react";
import { renderWithRedux } from "../../utils/testing";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("should only show signup and signin if not authenticated", () => {
    const context = renderWithRedux(<Navbar isAuthenticated={false} />);
    const { getByLabelText, queryByLabelText } = context;

    expect(getByLabelText("signup-button")).toBeInTheDocument();
    expect(getByLabelText("signin-button")).toBeInTheDocument();
    expect(queryByLabelText("signout-button")).not.toBeInTheDocument();
  });

  it("should only show signout if authenticated", () => {
    const context = renderWithRedux(<Navbar isAuthenticated={true} />);
    const { getByLabelText } = context;

    expect(getByLabelText("signout-button")).toBeInTheDocument();
  });
});
