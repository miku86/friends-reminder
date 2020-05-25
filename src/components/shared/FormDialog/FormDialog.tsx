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
import React, { ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import { AppState, AuthState } from "../../../utils/types";

interface Props {
  authError?: AuthState["authError"];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  open: boolean;
  text: string;
  withHint: boolean;
}

export const FormDialog = ({
  authError,
  handleChange,
  handleClose,
  handleSubmit,
  open,
  text,
  withHint,
}: Props) => {
  return (
    <Dialog open={open} onClose={handleClose} aria-label="modal">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{text}</DialogTitle>
        <DialogContent>
          {authError && (
            <Alert severity="error" aria-label="error">
              {authError}
            </Alert>
          )}
          {withHint && (
            <DialogContentText>
              Demo: demo@miku86.com / demo123
            </DialogContentText>
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
          <Button color="primary" aria-label="submit" type="submit">
            {text}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const mapStateToProps = (state: AppState) => ({
  authError: state.auth.authError,
});

export default connect(mapStateToProps)(FormDialog);
