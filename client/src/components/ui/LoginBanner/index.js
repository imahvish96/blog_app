import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./style";

function LoginCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <h1>DEV Community is a community of 558,324 amazing developers</h1>
        </Typography>

        <Typography variant="body2" component="p">
          <p>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="medium" color="primary" variant="outlined" style={{textTransform:'none'}}>
          Create New Account
        </Button>
      </CardActions>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" style={{textTransform:'none', fontSize:'16px', padding:'0px 8px 8px'}}>
          Log In
        </Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
