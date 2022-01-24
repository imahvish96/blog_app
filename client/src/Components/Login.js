import React, { useState, useEffect } from 'react';
import { TextField, Container, Button, Typography, FormControlLabel, Checkbox, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BlogContext } from '../Context';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '60ch',
    },
    mt: {
      marginTop: '10px',
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Login(props) {
  const classes = useStyles();
  const { handelChange, state, setIsLogin, isLogin } = React.useContext(BlogContext);
  const [token, setToken] = useState('');
  const history = useHistory();

  useEffect(() => {
    const isAuth = localStorage.getItem('token');
    if (isAuth && isAuth !== undefined) {
      history.push('/api');
    }
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/login', { ...state })
      .then((res) => {
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        props.history.push('/api/writeblog');
        setIsLogin(true);
      })
      .catch((err) => console.error(err));
    if (localStorage.getItem('token') !== null && undefined) setIsLogin(!isLogin);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate method="POST" onSubmit={handelSubmit}>
          <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus value={state.email} onChange={handelChange} />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={state.password} onChange={handelChange} />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
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
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
