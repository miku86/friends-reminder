import { Button } from "@material-ui/core";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { signin } from "../../state/authSlice";
import { Credentials } from "../../utils/types";
import FormDialog from "../shared/FormDialog/FormDialog";

interface Props {
  signin?: ({ email, password }: Credentials) => void;
}

export const Signin = ({ signin }: Props) => {
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
    signin!({ email: credentials.email, password: credentials.password });
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
      <FormDialog
        handleChange={handleChange}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        open={open}
        text="Signin"
        withHint={true}
      />
    </>
  );
};

const mapDispatchToProps = {
  signin,
};

export default connect(null, mapDispatchToProps)(Signin);
