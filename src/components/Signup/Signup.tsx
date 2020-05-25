import { Button } from "@material-ui/core";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../state/authSlice";
import { Credentials } from "../../utils/types";
import FormDialog from "../shared/FormDialog/FormDialog";

interface Props {
  signup?: ({ email, password }: Credentials) => void;
}

export const Signup = ({ signup }: Props) => {
  const [open, setOpen] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    setCredentials((prev) => ({
      ...prev,
      [target.id]: target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signup!({ email: credentials.email, password: credentials.password });
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
      <FormDialog
        handleChange={handleChange}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        open={open}
        text="Signup"
        withHint={false}
      />
    </>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);
