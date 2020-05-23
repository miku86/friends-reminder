import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../state/store";
import { App } from "./App";

describe("App", () => {
  it("should show only the landing page if the user is not signedin", () => {
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <App isAuthenticated={false} />
      </Provider>
    );
    expect(getByTestId("landing-page")).toBeInTheDocument();
    expect(queryByTestId("content-page")).not.toBeInTheDocument();
  });

  it("should show only AddFriend and FriendsList if the user is signedin", () => {
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <App isAuthenticated={true} />
      </Provider>
    );
    expect(getByTestId("content-page")).toBeInTheDocument();
    expect(queryByTestId("landing-page")).not.toBeInTheDocument();
  });
});
