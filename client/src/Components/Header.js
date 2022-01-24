import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { BlogContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  space: {
    marginTop: '75px',
  },
  btnStyle: {
    padding: '2px 9px',
    fontSize: '20px',
    background: '#000',
    boxShadow: 'none',
    '&:hover': {
      background: '#000',
      boxShadow: 'none',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const { handelSignOut, isLogin } = React.useContext(BlogContext);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#fff' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button color="inherit" variant="contained" className={classes.btnStyle}>
                <Link to="/api" className={classes.link}>
                  WeB
                </Link>
              </Button>
            </Typography>
            {isLogin ? (
              <Link to="/api/logout" className={classes.link}>
                <Button color="inherit" color="primary" onClick={handelSignOut}>
                  Logout
                </Button>
              </Link>
            ) : (
              <Link to="/api/login" className={classes.link}>
                <Button color="inherit" color="primary">
                  Login
                </Button>
              </Link>
            )}
            <Link to="/api/contact" className={classes.link}>
              <Button color="inherit" color="primary" variant="contained">
                Contact Us
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Box className={classes.space} />
    </div>
  );
}
