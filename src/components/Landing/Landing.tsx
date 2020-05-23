import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
  },
}));

interface Props {}

const Landing = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.content} data-testid="landing-page">
      Landing Page goes here
    </div>
  );
};

export default Landing;
