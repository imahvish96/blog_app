import React, { useContext, useEffect, useState, useRef } from "react";
import { Grid, Container, makeStyles, Box } from "@material-ui/core";
import { BlogContext } from "../../../context";
import LeftAside from "../../layout/Aside/LeftAside";
import RightAside from "../../layout/Aside/RightAside";
import StoryBoard from "../../ui/StoryBoard";
import ButtonGroups from "./../../ui/ButtonGroup";
import CustomTabs from "../../ui/Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "15px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mt: {
    marginTop: "10px",
  },
}));

export default function Home() {
  const { posts } = useContext(BlogContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Box width="253px">
          <LeftAside />
        </Box>
        <Box width="650px" style={{ paddingTop: "8px" }}>
          <CustomTabs />
          {posts.map((post) => {
            return (
              <Grid item xs={12}>
                <Box mb={2}>
                  <StoryBoard
                    post={post.blog}
                    id={post._id}
                    title={post.title}
                    path={post.url}
                  />
                </Box>
              </Grid>
            );
          })}
        </Box>
        <Box width="325px">
          <RightAside tagCards={[0, 1, 2, 3]} />
        </Box>
      </Container>
    </div>
  );
}
