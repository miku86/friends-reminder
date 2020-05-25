import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import SignupDialog from "../Signup/SignupDialog/SignupDialog";

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

interface Props {}

const Landing = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <SignupDialog open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Landing;
