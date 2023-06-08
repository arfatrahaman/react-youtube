import React from "react";
import { sidebarData } from "./sidebarData";

export const Sidebar = ({ activeSidebar, setActiveSidebar, showSideBar }) => {
  return (
    <aside
      id="sidebar"
      className={showSideBar ? "hide-sidebar" : "show-sidebar"}
    >
      <div className="sidebar-wrapper">
        <div className="sidebar-inner-content">
          {sidebarData.map((item, index) => {
            return (
              <div
                className={
                  activeSidebar === item.name
                    ? "sidebar-item active-sidebar-item"
                    : "sidebar-item"
                }
                onClick={() => setActiveSidebar(item.name)}
                key={index}
              >
                <div className="sidebar-icon-box">
                  <p className="icon">{item.icon}</p>
                </div>
                <div className="sidebar-name-box">
                  <h4>{item.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
