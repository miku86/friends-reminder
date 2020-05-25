import { render } from "@testing-library/react";
import React from "react";
import { FormDialog } from "./FormDialog";

describe("FormDialog", () => {
  it("should show an error when there is an auth error", async () => {
    const { getByLabelText } = render(
      <FormDialog authError={"error"} open={true} />
    );

    expect(getByLabelText("error")).toBeInTheDocument();
  });
});
