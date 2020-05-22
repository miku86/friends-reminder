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
import { signin } from "../../state/authSlice";
import { Credentials } from "../../utils/types";

interface Props {
  signin?: (credentials: Credentials) => void;
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

  const handleSubmit = () => {
    signin!(credentials);
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
      <Dialog open={open} onClose={handleClose} aria-label="signin-modal">
        <DialogTitle>Signin</DialogTitle>
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
            aria-label="signin-submit"
          >
            Signin
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapDispatchToProps = {
  signin,
};

export default connect(null, mapDispatchToProps)(Signin);
