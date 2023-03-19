import React from "react";
import { Box } from "@material-ui/core";
import useStyle from "./style";
// import Home from "../../../assets/icons/nav/png/Home.png";

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
                <Box component="span" style={{ width: "25px", height: "25px" }}>
                  <img
                    src={tag.icon}
                    alt={tag.icon}
                    style={{ width: "100%" }}
                  />
                </Box>
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
