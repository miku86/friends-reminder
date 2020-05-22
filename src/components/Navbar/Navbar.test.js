import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("should only show signup and signin if not authenticated", () => {
    const context = render(
      <Provider store={store}>
        <Navbar isAuthenticated={false} />
      </Provider>
    );
    const { getByLabelText, queryByLabelText } = context;

    expect(getByLabelText("signup-button")).toBeInTheDocument();
    expect(getByLabelText("signin-button")).toBeInTheDocument();
    expect(queryByLabelText("signout-button")).not.toBeInTheDocument();
  });

  it("should only show signout if authenticated", () => {
    const context = render(
      <Provider store={store}>
        <Navbar isAuthenticated={true} />
      </Provider>
    );
    const { getByLabelText } = context;

    expect(getByLabelText("signout-button")).toBeInTheDocument();
  });
});
