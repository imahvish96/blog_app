import React from "react";
import { Box } from "@material-ui/core";
import TagPost from "../../../ui/TagPost";

export default function RightAside({ tagCards }) {
  return (
    <aside>
      {tagCards.map((card) => (
        <Box className="left-wrapper" mb={1}>
          <TagPost cardHeaderTitle="#challenge" postByTagLink={[0, 1, 3]} />
        </Box>
      ))}
    </aside>
  );
}
