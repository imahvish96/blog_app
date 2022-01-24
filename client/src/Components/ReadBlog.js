import React, { useContext } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { BlogContext } from '../Context';
import Profilecard from '../Components/ProfileCard';
import ActionCenter from './ActionCenter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '15px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mt: {
    marginTop: '10px',
    marginRight: '20px',
    borderRadius: '0.5rem',
    background: '#fff',
    marginLeft: '10px',
  },
  readBlog: {
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
}));

export default function Readblog() {
  const {
    post: { url, blog, title },
  } = useContext(BlogContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        style={{
          display: 'flex',
        }}
      >
        {/* new aside with likes and shares */}
        <ActionCenter />
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.mt}>
          <Grid item xs={12}>
            <div className="banner-style">
              <img src={url} alt="" style={{ width: '100%' }} />
            </div>
          </Grid>
          <div className={classes.readBlog}>
            <h1 className="main-heading">{title}</h1>
            <p>{blog}</p>
          </div>
        </Grid>
        <Profilecard />
      </Container>
    </div>
  );
}
