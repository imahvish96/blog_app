import React from 'react';
import { Card, CardActions, CardContent, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 235,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const tags = ['#javascript', '#python', '#java', '#php', '#webdev', '#reactjs', '#angular', '#beginners', '#programing', '#toturials', '#css', '#scss', '#node', '#android', '#productivity', '#career', '#devops'];

export default function Aside() {
  const classes = useStyles();

  return (
    <aside>
      <div className="left-wrapper">
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              <h1>DEV Community is a community of 558,324 amazing developers</h1>
            </Typography>

            <Typography variant="body2" component="p">
              <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button size="medium" color="primary" variant="contained">
              Create New Account
            </Button>
          </CardActions>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button size="small" color="primary">
              Login
            </Button>
          </CardActions>
        </Card>

        <div className="tag-wrapper">
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <h1>Popular Tag</h1>
          </Typography>
          <div className="tag">
            <ul className="">
              {tags.map((tag) => {
                return (
                  <li>
                    <Typography className={classes.title} color="textSecondary">
                      {tag}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
