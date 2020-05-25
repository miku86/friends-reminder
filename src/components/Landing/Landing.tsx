import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../state/authSlice";
import { Credentials } from "../../utils/types";
import FormDialog from "../shared/FormDialog/FormDialog";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  container: {
    width: "100%",
    maxWidth: 480,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: theme.palette.primary.contrastText,
    lineHeight: "1.5",
    marginBottom: "40px",
  },
  cta: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
  },
}));

interface Props {
  signup?: ({ email, password }: Credentials) => void;
}

const Landing = ({ signup }: Props) => {
  const classes = useStyles();
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
    <div className={classes.content} data-testid="landing-page">
      <div className={classes.container}>
        <Typography
          className={classes.heading}
          variant="h4"
          component="h1"
          align="justify"
        >
          See quickly when you last contacted your friends. Never forget and
          lose a friend again.
        </Typography>

        <Button
          className={classes.cta}
          variant="contained"
          size="large"
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
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Landing);
