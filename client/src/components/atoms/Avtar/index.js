import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import useStyles from "./style";

export default function UserAvtar() {
  const classes = useStyles();
  return (
    <Box style={{ display: "flex", gap: "10px", alignItems: "center" }} mb={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className={classes.small}
      />
      <Box>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#3D3D3D",
          }}
        >
          Nevo David
        </div>
        <div style={{ fontSize: "12px", color: "#525252" }}>
          Mar 5 (14 hours ago)
        </div>
      </Box>
    </Box>
  );
}
