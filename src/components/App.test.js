import React from "react";
import { renderWithRedux } from "../utils/testing";
import { App } from "./App";

describe("App", () => {
  it("should show only the landing page if the user is not signedin", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(
      <App isAuthenticated={false} />
    );
    expect(getByTestId("landing-page")).toBeInTheDocument();
    expect(queryByTestId("content-page")).not.toBeInTheDocument();
  });

  it("should show only AddFriend and FriendsList if the user is signedin", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(
      <App isAuthenticated={true} />
    );
    expect(getByTestId("content-page")).toBeInTheDocument();
    expect(queryByTestId("landing-page")).not.toBeInTheDocument();
  });
});
