import React, { useContext } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import BlogList from './BlogList';
import { BlogContext } from '../Context';
import Aside from './Aside';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '15px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mt: {
    marginTop: '10px',
  },
}));

export default function Blog(props) {
  const { posts } = useContext(BlogContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container
        style={{
          display: 'flex',
        }}
      >
        <Aside />
        <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" className={classes.mt}>
          {posts.map((post) => {
            return <BlogList {...post} key={post._id} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}
