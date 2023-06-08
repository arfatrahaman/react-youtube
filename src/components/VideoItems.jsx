import React from "react";
import { ChannelCard } from "./ChannelCard";
import { VideoCard } from "./VideoCard";

export const VideoItems = ({ videoItem }) => {
  return (
    <div className="video-items">
      <div className="common-videos-wrapper">
        {videoItem?.map((videoItem) => {
          return (
            <div className="video-item-inner" key={videoItem?.id?.videoId}>
              {videoItem?.id?.channelId && (
                <ChannelCard channelInfo={videoItem} />
              )}
              {videoItem?.id?.videoId && <VideoCard videoInfo={videoItem} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
