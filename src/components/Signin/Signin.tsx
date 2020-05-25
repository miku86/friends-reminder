import { Button } from "@material-ui/core";
import React, { useState } from "react";
import SigninDialog from "./SigninDialog/SigninDialog";

interface Props {}

export const Signin = (props: Props) => {
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
        aria-label="signin-button"
        onClick={handleClickOpen}
      >
        Signin
      </Button>
      <SigninDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Signin;
