import React from "react";
import SidebarRow from "../Sidebar/SidebarRow";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" />
      <SidebarRow title="Trending" />
      <SidebarRow title="Subscription" />
    </div>
  );
};

export default Sidebar;
