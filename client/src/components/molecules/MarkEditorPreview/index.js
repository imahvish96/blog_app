import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function MarkEditorPreview({post}) {
  const [source, setSource] = useState(`## MarkdownPreview`);
  return (
    <MarkdownPreview
      source={post}
      wrapperElement={{
        "data-color-mode": "light",
      }}
    />
  );
}
