import React, { useState, useEffect } from "react";
import { ApiData } from "../assets/ApiData";
import { Sidebar } from "./Sidebar";
import { Videos } from "./Videos";
import { SidebarToggle } from "./SidebarToggle";

export const Feed = () => {
  const [activeSidebar, setActiveSidebar] = useState("New");
  const [showSideBar, setShowSideBar] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    ApiData(`search?&part=snippet&q=${activeSidebar}&maxResults=50`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [activeSidebar]);

  console.log(videos);

  const handleSidebarToggle = (e) => {
    if (showSideBar === false) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }
  };
  return (
    <section id="feed-page">
      <SidebarToggle handleSidebarToggle={handleSidebarToggle} />
      <div className="container">
        <div className="common-page-wrapper">
          <Sidebar
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
            showSideBar={showSideBar}
          />
          <Videos videos={videos} showSideBar={showSideBar} />
        </div>
      </div>
    </section>
  );
};
