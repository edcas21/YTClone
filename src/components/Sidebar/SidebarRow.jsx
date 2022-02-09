import { Home } from "@mui/icons-material";
import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ title }) => {
  return (
    <div className="sidebarRow">
      <Home />
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarRow;
