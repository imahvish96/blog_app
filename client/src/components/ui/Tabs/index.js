import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function CustomTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      square
      style={{
        background: "transparent",
        boxShadow: "none",
        marginBottom: "8px",
      }}
    >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        width="120px"
      >
        <Tab
          style={{ minWidth: "100px", textTransform: "none" }}
          label="Relevant"
        />
        <Tab
          style={{ minWidth: "100px", textTransform: "none" }}
          label="Latest"
        />
        <Tab style={{ minWidth: "100px", textTransform: "none" }} label="Top" />
      </Tabs>
    </Paper>
  );
}
