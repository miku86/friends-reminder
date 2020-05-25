import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { signin } from "../../state/authSlice";
import { AppState, AuthState, Credentials } from "../../utils/types";

interface Props {
  authError: AuthState["authError"];
  signin?: (credentials: Credentials) => void;
}

export const Signin = ({ authError, signin }: Props) => {
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
      <Dialog open={open} onClose={handleClose} aria-label="signin-modal">
        <form onSubmit={handleSubmit}>
          <DialogTitle>Signin</DialogTitle>
          <DialogContent>
            {authError && (
              <Alert severity="error" aria-label="signin-error">
                {authError}
              </Alert>
            )}
            <DialogContentText>
              Demo: demo@miku86.com / demo123
            </DialogContentText>
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
            <Button color="primary" aria-label="signin-submit" type="submit">
              Signin
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  authError: state.auth.authError,
});

const mapDispatchToProps = {
  signin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
