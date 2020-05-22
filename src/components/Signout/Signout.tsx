import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { signout } from "../../state/authSlice";

interface Props {
  signout?: () => void;
}

export const Signout = ({ signout }: Props) => {
  const handleSubmit = () => {
    signout!();
  };

  return (
    <Button color="inherit" aria-label="signout-button" onClick={handleSubmit}>
      Signout
    </Button>
  );
};

const mapDispatchToProps = {
  signout,
};

export default connect(null, mapDispatchToProps)(Signout);
