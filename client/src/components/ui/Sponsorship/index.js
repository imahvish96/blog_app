import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "./style";

export default function Cards(props) {
  const { media, primeryHeading, content, chekout, cardTitle, action } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {media && (
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      )}

      <CardContent>
        <Box mb={2}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {cardTitle}
          </Typography>
        </Box>
        {primeryHeading && (
          <Typography variant="h5" component="h2">
            heading
          </Typography>
        )}
        {content && (
          <Typography className={classes.pos} color="textSecondary">
            DEV runs on 100% open source code known as Forem. Contribute to the
            codebase or host your own!
          </Typography>
        )}
        {chekout.length && (
          <React.Fragment>
            <Typography variant="h6" component="h2">
              Check these out! 👇
            </Typography>
            <Box mt={1} style={{ padding: "0 16px" }} className={classes.list}>
              <ul>
                {chekout.map((list) => (
                  <React.Fragment>
                    <li>
                      <a href="#">{list}</a>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </Box>
          </React.Fragment>
        )}
      </CardContent>
      {action && (
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      )}
    </Card>
  );
}
