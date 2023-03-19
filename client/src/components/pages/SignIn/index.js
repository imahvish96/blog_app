import React, { useState, useEffect } from "react";
import {
  TextField,
  Container,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import { BlogContext } from "../../../context";
import { useHistory } from "react-router-dom";
import { getLogedIn } from "../../../api";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
    mt: {
      marginTop: "10px",
    },
    paper: {
      background: "#fff",
      padding: "8px",
    },
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const { handelChange, state, setAccessToken, setRefreshToken, setIsLogin } =
    React.useContext(BlogContext);
  const history = useHistory();
  const handleLogin = async (e) => {
    try {
      const isLogin = await getLogedIn(state);
      if (isLogin.data) {
        setIsLogin(true);
        setAccessToken(isLogin.data.accessToken);
        setRefreshToken(isLogin.data.refreshToken);
        localStorage.setItem("active_session", uuidv4());
      }
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="600px"
      style={{
        width: "500px",
        height: "413px",
        maxHeight: "413px",
        padding: "24px",
      }}
    >
      <div
        className={classes.paper}
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "25px",
          boxSizing: "border-box",
          border: "1px solid #eee",
        }}
      >
        <Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={state.email}
              onChange={handelChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={handelChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ margin: "10px 0" }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid container style={{ marginTop: "15px" }}>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </Container>
  );
}
