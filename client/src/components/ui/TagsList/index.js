import React from "react";
import useStyle from "./style";
import { Typography } from '@material-ui/core'

function TagList({ popularTags }) {
  const classes = useStyle();
  return (
    
      <div className="tag_wrapper">
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <h1>Popular Tag</h1>
        </Typography>
        <div className="tag">
          {popularTags.map((tag) => {
            return (
              <a href="#" className={classes.tags}>
                {tag}
              </a>
            );
          })}
        </div>
      </div>

  );
}

export default TagList;
