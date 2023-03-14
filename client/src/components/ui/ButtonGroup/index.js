import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textButton: {
    border: "none",
  },
}));

export default function ButtonGroups() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="text primary button group">
        <Button className={classes.textButton}>Relevant</Button>
        <Button className={classes.textButton}>Latest</Button>
        <Button className={classes.textButton}>Top</Button>
      </ButtonGroup>
    </div>
  );
}
