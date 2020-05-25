import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../state/authSlice";
import { AppState, AuthState, Credentials } from "../../utils/types";

interface Props {
  authError: AuthState["authError"];
  signup?: ({ email, password }: Credentials) => void;
  open: boolean;
  handleClose: () => void;
}

export const SignupDialog = ({
  authError,
  signup,
  open,
  handleClose,
}: Props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

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
    <Dialog open={open} onClose={handleClose} aria-label="signup-modal">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
          {authError && (
            <Alert severity="error" aria-label="signup-error">
              {authError}
            </Alert>
          )}
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
          <Button color="primary" aria-label="signup-submit" type="submit">
            Signup
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const mapStateToProps = (state: AppState) => ({
  authError: state.auth.authError,
});

const mapDispatchToProps = {
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupDialog);
