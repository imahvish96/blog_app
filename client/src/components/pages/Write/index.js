import React, { useState } from "react";
import { Button, Box, Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Editor from "../../molecules/MarkEditor";
import ChipInput from "../../atoms/ChipInput";
import { saveNewPost } from "../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {
    textTransform: "none",
  },
}));

export default function Writeblog() {
  const classes = useStyles();
  const [newPostBlog, setNewPostBlog] = useState({
    post: "",
    title: "",
    tags: "",
    coverImage: "",
  });
  const [postsValue, setPostValue] = useState("");
  const [tags, setTags] = useState([]);
  const [response, setResponse] = useState({});

  function formData() {
    const data = new FormData();
    for (const item in newPostBlog) {
      data.append([item], newPostBlog[item]);
    }
    return data;
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formValue = formData();
    console.log("TTYT", formValue);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Accept: "application/json",
      },
    };
    const res = await saveNewPost(formValue, config);
    setResponse(res);
  };

  function onChange(event, markValue) {
    if (markValue) {
      setPostValue(() => markValue);
    }
    if (event.target.name === "heading")
      setNewPostBlog((prev) => ({
        ...prev,
        title: event.target.value,
      }));
    if (event.target.name === "file") {
      setNewPostBlog((prev) => ({
        ...prev,
        coverImage: event.target.files ? event.target.files[0] : null,
      }));
    } else {
      console.log(tags);
      setNewPostBlog((prev) => ({
        ...prev,
        post: postsValue,
        tags: tags,
      }));
    }
  }

  function handleSelecetedTags(items) {
    setTags(items);
  }

  const exp = `Embed rich content such as Tweets, YouTube videos, etc. Use the complete URL: { % embed https://... % };. See a list of supported embeds.
  In addition to images for the post's content, you can also drag and drop a cover image.`;

  console.log("%TT", newPostBlog);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{ background: "#fff" }}
        className="artical-content"
      >
        <form
          className={classes.root}
          autoComplete="off"
          encType="multipart/form-data"
        >
          <Box m={1}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={onChange}
              name="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="outlined"
                component="span"
                style={{ textTransform: "none" }}
              >
                Add a cover image...
              </Button>
            </label>
          </Box>
          <Box m={1}>
            <input
              type="text"
              name="heading"
              onChange={onChange}
              style={{
                width: "100%",
                outline: "none",
                border: "none",
                fontSize: "40px",
                color: "#000",
                margin: "8px 0",
              }}
              placeholder="New Post Title Here..."
            />
          </Box>
          <ChipInput
            selectedTags={handleSelecetedTags}
            fullWidth
            id="tags"
            name="tags"
            placeholder="Add up 4 tags..."
          />
        </form>

        <Box m={1} id="myElement">
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Editor onEditorChange={onChange} />
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Editor Basics
                  </Typography>
                  <Typography>
                    Use Markdown to write and format posts.
                  </Typography>
                  <Box mb={2} mt={2}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Commonly used syntax
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                  <Typography className={classes.pos} color="textSecondary">
                    {exp}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box m={1} width="100%">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handelSubmit}
            style={{ textTransform: "none", marginRight: "10px" }}
          >
            Publish
          </Button>
          <Button
            color="primary"
            type="submit"
            style={{ textTransform: "none", color: "#999" }}
          >
            Save Draft
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
