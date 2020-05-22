import { Button } from "@material-ui/core";
import React from "react";

interface Props {
  signout: () => void;
}

export const Signout = ({ signout }: Props) => {
  const handleSubmit = () => {
    signout();
  };

  return (
    <Button color="inherit" aria-label="signout-button" onClick={handleSubmit}>
      Signout
    </Button>
  );
};

export default Signout;
