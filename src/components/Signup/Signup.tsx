import { Button } from "@material-ui/core";
import React, { useState } from "react";
import SignupDialog from "./SignupDialog/SignupDialog";

interface Props {}

export const Signup = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="inherit"
        aria-label="signup-button"
        onClick={handleClickOpen}
      >
        Signup
      </Button>
      <SignupDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Signup;
