import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { ApiData } from "../assets/ApiData";
import { VideoItems } from "./VideoItems";
import { GoVerified } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

export const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    ApiData(`videos?part=contentDetails,Csnippet,Cstatistics&id=${id}`).then(
      (data) => {
        setVideoDetails(data?.items[0]);
      }
    );
    ApiData(`search?relatedToVideoId=${id}&part=snippet&type=video`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  if (!videoDetails?.snippet) {
    return "LOading....";
  }
  return (
    <section id="video-details">
      <div className="container">
        <div className="video-details-wrapper">
          <div className="video-details-item-1">
            <div className="video-details-item-1-inner">
              <div className="video-player">
                <ReactPlayer
                  className="react-player"
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls
                />
              </div>
              <div className="video-title">
                <p>{videoDetails?.snippet?.title}</p>
              </div>
              <div className="video-detail-information">
                <div className="channel-link">
                  <Link
                    to={`/channel/${videoDetails?.snippet?.channelId}`}
                    className="channel-link-inner"
                  >
                    {videoDetails?.snippet?.channelTitle}
                    <span className="verify-icon icon">
                      <GoVerified />
                    </span>
                  </Link>
                </div>
                <div className="video-view-count ">
                  <p className="view-count-inner">
                    <span>
                      <BiShow className="icon" />
                    </span>
                    {videoDetails?.statistics?.viewCount}
                  </p>
                </div>
                <div className="video-like-count">
                  <p className="like-count-inner">
                    <span>
                      <AiFillLike className="icon" />
                    </span>
                    {videoDetails?.statistics?.likeCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="video-details-item-2">
            <div className="video-details-item-2-inner">
              <VideoItems videoItem={videos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
