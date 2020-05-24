import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import { addFriend } from "../../state/friendsSlice";
import { getCurrentTimestamp } from "../../utils/date";
import { AppState, NewFriend } from "../../utils/types";

interface Props {
  addFriend?: (newFriend: NewFriend) => void;
  userId?: NewFriend["userId"];
}

export const AddFriend = ({ addFriend, userId }: Props) => {
  const [open, setOpen] = useState(false);
  const [friendName, setFriendName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFriendName(event.currentTarget.value);
  };

  const handleSubmit = () => {
    const newFriend = {
      userId,
      friendName,
      lastTimeContacted: getCurrentTimestamp(),
    };
    addFriend!(newFriend);
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        aria-label="add-friend-button"
        onClick={handleClickOpen}
      >
        Add Friend
      </Button>
      <Dialog open={open} onClose={handleClose} aria-label="add-friend-modal">
        <DialogTitle>Add Friend</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a friend to the list, please enter the name of the friend.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="friend-name"
            label="Name of Friend"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            color="primary"
            aria-label="add-friend-submit"
          >
            Add Friend
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  userId: state.auth.userId,
});

const mapDispatchToProps = {
  addFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);
