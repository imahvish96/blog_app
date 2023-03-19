import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    minWidth: 235,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  tags: {
    display: "block",
    padding: "8px 15px",
    borderRadius: "4px",
    boxSizing: "border-box",
    color: "#777",
    "&:hover": {
      background: "rgba(47, 58, 178,0.1)",
      color: "rgb(47, 58, 178) !important",
      textDecoration: "underline",
    },
  },
  tagsWrapper: {},
});

export default useStyle;
