import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const VideoList = () => {
  const media = useSelector((store) => store.media.videos);
  return (
    <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
      {media?.results?.map((movie) => (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movie?.key}`}
          controls
          width="100%"
          // height="100%"
          //   playing={true}
        />
      ))}
    </div>
  );
};

export default VideoList;
