import React, { useContext } from "react";
import { Box, Grid, Container, makeStyles } from "@material-ui/core";
import { BlogContext } from "../../../context";
import Card from "../../ui/Card";
import ActionCenter from "../../ui/ActionCenter";
import MarkEditorPreview from "../../molecules/MarkEditorPreview";
import { fetchPostById } from "../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "15px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mt: {
    marginTop: "10px",
    marginRight: "20px",
    borderRadius: "0.5rem",
    background: "#fff",
    marginLeft: "10px",
  },
  readBlog: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
}));

export default function Readblog() {
  const [content, setContent] = React.useState({});
  const classes = useStyles();

  async function getPostById() {
    const data = await fetchPostById();
    if (data) setContent(data);
    return data;
  }

  React.useEffect(() => {
    getPostById();
  }, []);

  return (
    <Box className={classes.root} mb={2}>
      <Container
        style={{
          display: "flex",
        }}
      >
        <ActionCenter />
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.mt}
        >
          <Grid item xs={12}>
            <div className="banner-style">
              <img src={content.url} alt="" style={{ width: "100%" }} />
            </div>
          </Grid>
          <div className={classes.readBlog}>
            <h1 className="main-heading">{content.title}</h1>
            <MarkEditorPreview post={content.post} />
          </div>
        </Grid>
        <Card />
      </Container>
    </Box>
  );
}
