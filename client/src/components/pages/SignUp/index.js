import React, { useState } from "react";
import {
  TextField,
  Container,
  Button,
  Typography,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { oneLogin } from "../../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
    mt: {
      marginTop: "10px",
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const classes = useStyles();
  const [blog, setBlog] = useState("");
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("file", thumb[0]);
    data.append("title", title);
    data.append("blog", blog);
    data.append("thumb", thumb[0].name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("/writeblog", data, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handelChange = (e) => {
    setThumb(e.target.files);
  };

  return (
    <Container
      component="main"
      style={{
        width: "500px",
        margin: "24px auto",
        padding: "0px",
      }}
    >
      <CssBaseline />
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
        <Typography component="h1" variant="h5" style={{ marginBottom: "5px" }}>
          Welcome to DeV Community
        </Typography>
        <Typography
          component="h1"
          variant="body2"
          style={{ marginBottom: "18px" }}
        >
          DEV Community is a community of 1,023,907 amazing developers
        </Typography>

        <Box mb={3}>
          {oneLogin.map((item) => (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{
                margin: "10px 0",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                ...item.style,
              }}
            >
              <Box
                component="span"
                style={{
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <item.icon />
              </Box>
              <Box
                component="span"
                style={{ textAlign: "left", width: "160px" }}
              >{`Continue with ${item.text}`}</Box>
            </Button>
          ))}
          <Typography
            component="h1"
            variant="body2"
            style={{
              margin: "12px 0",
              textAlign: "center",
            }}
          >
            Have a password? Continue with your email address
          </Typography>
        </Box>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ margin: "15px 0", textTransform: "none" }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end" style={{ marginTop: "10px" }}>
            <Grid item>
              <Link to="signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
