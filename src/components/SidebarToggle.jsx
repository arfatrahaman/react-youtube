import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

export const SidebarToggle = ({ handleSidebarToggle }) => {
  return (
    <div className="sidebar-toggle-button">
      <div className="sidebar-toggle-icon" onClick={handleSidebarToggle}>
        <AiOutlineAlignLeft className="toggle-icon icon" />
      </div>
    </div>
  );
};
