import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../state/store";

export const renderWithRedux = (ui: React.Component) =>
  render(<Provider store={store}>{ui}</Provider>);
