import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiData } from "../assets/ApiData";
import { Videos } from "../components/Videos";
import { Sidebar } from "./Sidebar";
import { SidebarToggle } from "./SidebarToggle";
import { VideoItems } from "./VideoItems";

export const SearchFeed = () => {
  const { searchvideo } = useParams();
  const [searchFeedVideo, setSearchFeedVideo] = useState([]);

  useEffect(() => {
    ApiData(
      `search?q=${searchvideo}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
    ).then((data) => {
      setSearchFeedVideo(data.items);
    });
  }, [searchvideo]);

  return (
    <section id="search-feed">
      <div className="container">
        <VideoItems videoItem={searchFeedVideo} />
      </div>
    </section>
  );
};
