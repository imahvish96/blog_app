import React from "react";
import { Box } from "@material-ui/core";
import useStyle from "./style";

function NavLinks({ menu }) {
  const classes = useStyle();
  return (
    <div className="tag_wrapper">
      <div className={classes.tagsWrapper}>
        {menu.map((tag) => {
          return (
            <a href="#" className={classes.tags}>
              <Box
                display="flex"
                alignItems="center"
                style={{
                  gap: "8px",
                }}
              >
                <tag.icon style={{ fontSize: "20px" }} />
                {tag.menuTitle}
              </Box>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NavLinks;
