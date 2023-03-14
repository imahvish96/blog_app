import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { socialIcon } from "../../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function SocialLinkBar() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" mb={3} mt={2}>
      {socialIcon.map((item, i) => {
        return (
          <Box
            key={i}
            item
            style={{
              fontSize: "20px",
              margin: "0 10px",
            }}
          >
            <item.icon />
          </Box>
        );
      })}
    </Box>
  );
}

export default SocialLinkBar;
