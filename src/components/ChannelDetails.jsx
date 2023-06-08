import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiData } from "../assets/ApiData";
import { GoVerified } from "react-icons/go";

import { VideoItems } from "./VideoItems";

export const ChannelDetails = () => {
  const { id } = useParams();
  const [channelData, setChannelData] = useState("");
  const [channelVideos, setChannelVideos] = useState([]);
  // const [activeSidebar, setActiveSidebar] = useState("");
  // const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    // Channel Details Api Link
    ApiData(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => {
      setChannelData(data?.items[0]);
    });
    // Channel All Videos Api Link
    ApiData(
      `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => {
      setChannelVideos(data?.items);
    });
  }, [id]);

  // const handleSidebarToggle = (e) => {
  //   if (showSideBar === false) {
  //     setShowSideBar(true);
  //   } else {
  //     setShowSideBar(false);
  //   }
  // };

  return (
    <section id="channel-details">
      {/* Sidebar Toggle Button  */}
      {/* <SidebarToggle handleSidebarToggle={handleSidebarToggle} /> */}
      <div className="container">
        {/* SideBar */}

        {/* <Sidebar
          showSideBar={showSideBar}
          activeSidebar={activeSidebar}
          setActiveSidebar={setActiveSidebar}
        /> */}

        <div className="channel-details-wrapper">
          {/* Channel All Information */}
          <div className="channel-item-1 channel-item">
            <div className="channel-item-1-inner-content">
              <div className="channel-banner-image-box">
                <img
                  src={channelData?.brandingSettings?.image?.bannerExternalUrl}
                  alt=""
                  className="channel-banner-image"
                />
              </div>
              <div className="channel-all-information-inner">
                <div className="channel-all-information-1">
                  <div className="channel-profile-image-box">
                    <img
                      src={channelData?.snippet?.thumbnails?.high?.url}
                      alt=""
                      className="channel-profile-image"
                    />
                  </div>
                </div>
                <div className="channel-all-information-2">
                  <div className="channel-title-box">
                    <p className="channel-title">
                      {channelData?.brandingSettings?.channel?.title}
                      <span className="verify-icon icon">
                        <GoVerified />
                      </span>
                    </p>
                  </div>
                  <div className="channer-customurl-box">
                    <p className="channer-customurl">
                      {channelData?.snippet?.customUrl}
                    </p>
                    <p className="channel-subscriber">
                      {channelData?.statistics?.subscriberCount} Subscriber
                    </p>
                    <p className="channel-videos">
                      {channelData?.statistics?.videoCount} Videos
                    </p>
                  </div>
                  <div className="channel-description-box">
                    <p className="channel-description">
                      {channelData?.snippet?.description.slice(0, 50)}....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Channel All Videos */}
          <div className="channel-item-2 channel-item">
            <div className="channel-item-2-inner-content">
              <div className="channel-all-videos">
                <VideoItems videoItem={channelVideos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
