import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { signin } from "../../state/authSlice";
import { Credentials } from "../../utils/types";

interface Props {
  signin?: (credentials: Credentials) => void;
}

export const DemoSignin = ({ signin }: Props) => {
  const handleSubmit = () => {
    signin!({ email: "demo@miku86.com", password: "demo123" });
  };

  return (
    <Button
      color="inherit"
      aria-label="demo-signin-button"
      onClick={handleSubmit}
    >
      Demo
    </Button>
  );
};

const mapDispatchToProps = {
  signin,
};

export default connect(null, mapDispatchToProps)(DemoSignin);
