import React from "react";

const YoutubeFrame = ({ keys, mute }) => {
  return (
    <div className=" w-full">
      <iframe
        className="w-full aspect-video bg-gradient-to-t from-black"
        showinfo="0"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          keys +
          "?&loop=1&autoplay=1" +
          mute +
          "&playlist=" +
          keys
        }
        title="YouTube video player"
        allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default YoutubeFrame;
