import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      minWidth: 235,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    list: {
        padding: '0 16px',
        margin:'6px',
        "& li": {
            fontSize: '20px'
        },
        "& a": {
            color: '#3B49DF',
            textDecoration: 'underline',
            lineHeight: '30px'
        }
    }
  });

export default useStyles