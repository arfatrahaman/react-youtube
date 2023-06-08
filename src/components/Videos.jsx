import React from "react";
import { ChannelCard } from "./ChannelCard";
import { VideoCard } from "./VideoCard";

export const Videos = ({ videos, showSideBar }) => {
  return (
    <section
      id="videos"
      className={showSideBar ? "large-width" : "small-width"}
    >
      <div className="common-videos-wrapper">
        {videos?.map((videoItem) => {
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
    </section>
  );
};
