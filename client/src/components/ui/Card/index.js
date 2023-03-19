import React from 'react';
import { Typography, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#888',
    lineHeight: '1.6rem',
  },

  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="login-card-wrapper">
        <div className="avtar-wraper">
          <a href="#">
            <span className="avtar">
              <img src="/avatar-round-1.png" alt="" />
            </span>
            <div className="avtar-link">
              <h4>Creative Tim</h4>
            </div>
          </a>
        </div>
        <div className="about-avtar-wrapper">
          <Typography variant="p" className={classes.title}>
            <p>Fully Coded UI Tools to create web and mobile apps UI Kits, Templates and Dashboards built on top of Bootstrap, Vue.js, React, Angular, Node.js and Laravel.</p>
          </Typography>
        </div>
        <div className="follow-avtar-wrapper">
          <CardActions style={{ justifyContent: 'center', padding: '0px' }}>
            <Button size="large" width="100%" color="primary" variant="contained" style={{ width: '100%' }}>
              Follow
            </Button>
          </CardActions>
        </div>

        <div className="user-join-wrapper">
          <h5>JOINED</h5>
          <p>Jun 19, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
