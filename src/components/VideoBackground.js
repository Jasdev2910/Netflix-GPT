import React from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = ({ id, mute }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  useMovieVideo(id);

  return (
    <div className=" w-full">
      <iframe
        className="w-full  aspect-video bg-gradient-to-t from-black"
        showinfo="0"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          movieTrailer?.key +
          "?&loop=1&autoplay=1" +
          mute +
          "&playlist=" +
          movieTrailer?.key
        }
        title="YouTube video player"
        allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
