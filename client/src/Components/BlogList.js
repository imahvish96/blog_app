import React, { useContext } from 'react';
import { Paper, Grid, makeStyles, Card, CardActionArea, Box, CardContent, CardActions, CardMedia, Button, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { BlogContext } from '../Context';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  reactionBtn: {
    boxShadow: 'none',
    background: 'none',
    fontSize: '0.7rem',
    '&:hover': {
      boxShadow: 'none',
      background: '#eee',
    },
  },
}));

export default function BlogList({ blog, _id, title, url }) {
  const classes = useStyles();
  const { handelDetail } = useContext(BlogContext);
  const [reactionCount, setReactionCount] = React.useState(0);
  return (
    <Grid item xs={6}>
      <Paper>
        <Card className={classes.root}>
          <Link to={`api/${_id}`} className={classes.link} onClick={() => handelDetail(_id)}>
            <CardActionArea>
              <CardMedia component="img" alt={url} height="140" image={`${url}`} title={url} style={{ height: '150px' }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Box component="dib" dangerouslySetInnerHTML={{__html: blog}} />
            
              </CardContent>
            </CardActionArea>
          </Link>
          <div className="clap">
            <div>
              <CardActions style={{ width: '100%' }}>
                <Button size="small" variant="contained" className={classes.reactionBtn} onClick={() => setReactionCount(reactionCount + 1)}>
                  <FavoriteBorderIcon /> &nbsp; &nbsp;
                  <span>{reactionCount} reactions</span>
                </Button>
              </CardActions>
            </div>
            <div>
              <CardActions style={{ width: '100%', marginLeft: 'auto' }}>
                <span style={{ fontSize: '0.7rem' }}>1 min read</span>
              </CardActions>
            </div>
          </div>
        </Card>
      </Paper>
    </Grid>
  );
}
