import React from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";
import YoutubeFrame from "./YoutubeFrame";

const VideoBackground = ({ movieId, mute }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  const keys = movieTrailer?.key;

  useMovieVideo(movieId);

  return (
    <div>
      <YoutubeFrame keys={keys} mute={mute} />
    </div>
  );
};

export default VideoBackground;
