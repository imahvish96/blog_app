import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: "#000",
    },
    reactionBtn: {
      boxShadow: "none",
      background: "none",
      fontSize: "0.7rem",
      "&:hover": {
        boxShadow: "none",
        background: "#eee",
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));

  export default useStyles;