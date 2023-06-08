import React from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";

export const VideoCard = ({ videoInfo }) => {
  const {
    id: { videoId },
  } = videoInfo;
  const {
    snippet: { channelId, channelTitle, title, thumbnails },
  } = videoInfo;

  return (
    <div className="video-inner-content">
      {/* Video Detail Linik */}
      <Link to={`/video/${videoId}`} className="video-card">
        <img src={thumbnails.high.url} alt="" />
        <p className="video-title">{title.slice(0, 80)}....</p>
      </Link>
      {/* Channel Detail Link */}
      <Link to={`/channel/${channelId}`}>
        <p className="channel-name">
          {channelTitle}{" "}
          <span className="verify-icon icon">
            <GoVerified />
          </span>
        </p>
      </Link>
    </div>
  );
};
