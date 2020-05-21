import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../state/authSlice";
import { Credentials } from "../../utils/types";

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

  const handleSubmit = () => {
    signup!({ email: credentials.email, password: credentials.password });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        aria-label="signup-button"
        onClick={handleClickOpen}
      >
        Signup
      </Button>
      <Dialog open={open} onClose={handleClose} aria-label="signup-modal">
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-Mail"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            color="primary"
            aria-label="signup-submit"
          >
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);
