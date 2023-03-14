import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardHeader,
  Divider,
  Box,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./style";

function TagCard({ postByTagLink }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ background: "#fafafa", borderRadius: "4px" }}
    >
      <CardHeader
        title="#challenge"
        style={{ padding: "12px 16px" }}
        titleTypographyProps={{ variant: "h6" }}
      />
      {/* <Divider /> */}
      <List aria-label="main mailbox folders" style={{ padding: "0px" }}>
        {postByTagLink.map((item) => (
          <React.Fragment>
            <ListItem button>
              <Box>
                <Typography
                  className={classes.pos}
                  style={{ fontSize: "14px" }}
                >
                  How to Navigate and Solve Complex Code Challenges
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  1 comments
                </Typography>
              </Box>
            </ListItem>
            {/* <Divider /> */}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}

export default TagCard;
