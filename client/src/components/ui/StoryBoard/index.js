import React, { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { BlogContext } from "../../../context";

import UserAvtar from "../../atoms/Avtar";
import useStyles from "./style";

export default function BlogCard({ post, title, path, id }) {
  const classes = useStyles();
  const { handelDetail } = useContext(BlogContext);
  const [reactionCount] = React.useState(0);
  return (
    <Card>
      <Link
        to={`/${id}`}
        className={classes.link}
        onClick={() => handelDetail(id)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={path}
            height="140"
            image={`${path}`}
            title={path}
            style={{ height: "150px" }}
          />
          <CardContent>
            <UserAvtar />
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <div
        className="clap"
        style={{ display: "flex", alignItems: "center", paddingRight: "8px" }}
      >
        <div style={{ width: "100%" }}>
          <CardActions
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <div>
              <Button
                size="small"
                variant="contained"
                className={classes.reactionBtn}
                style={{ textTransform: "none" }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FavoriteBorderIcon />
                  <span style={{ marginLeft: "8px" }}>
                    {reactionCount} Love
                  </span>
                </span>
              </Button>
              <Button
                size="small"
                variant="contained"
                className={classes.reactionBtn}
                style={{ textTransform: "none" }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <ChatBubbleOutlineIcon />
                  <span style={{ marginLeft: "8px" }}>
                    {reactionCount} Comment
                  </span>
                </span>
              </Button>
            </div>
            <Button
              size="small"
              variant="contained"
              className={classes.reactionBtn}
              style={{ textTransform: "none" }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <BookmarkBorderIcon />
                <span style={{ marginLeft: "8px" }}>Save</span>
              </span>
            </Button>
          </CardActions>
        </div>
        {/* <div>
          <CardActions style={{ width: "100%", marginLeft: "auto" }}>
            <span style={{ fontSize: "0.7rem" }}>1 min read</span>
          </CardActions>
        </div> */}
      </div>
    </Card>
  );
}
