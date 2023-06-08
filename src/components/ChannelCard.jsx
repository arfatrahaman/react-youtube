import React from "react";
import { Link } from "react-router-dom";

export const ChannelCard = ({ channelInfo }) => {
  const {
    snippet: { thumbnails, channelTitle, channelId },
  } = channelInfo;

  return (
    <Link to={`/channel/${channelId}`} className="channel-inner-content">
      <div className="channel-profile-image">
        <img
          src={thumbnails?.high?.url}
          alt=""
          className="channel-profile-img"
        />
      </div>
      <p className="channel-name">{channelTitle}</p>
    </Link>
  );
};
