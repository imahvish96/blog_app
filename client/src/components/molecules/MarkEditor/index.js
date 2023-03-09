import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

const Editor = ({ blog, onEditorChange }) => {
  const [markDown, setMarkDown] = useState("");

function onChange(val, event) {
    setMarkDown(val)
    onEditorChange(event, val)
}


  return (
    <div>
      <MDEditor
        value={markDown}
        onChange={(val, event) => onChange(val, event)}
        height="50vh"
        preview="live"
        data-color-mode="light"
        placeholder="Write your post content here..."
      />
    </div>
  );
};

export default Editor;
