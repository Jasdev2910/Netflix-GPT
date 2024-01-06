import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const VideoPalyer = ({ keys }) => {
  //   const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  //   const keys = movieTrailer?.key;
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${keys}`}
        controls
        width="100%"
        // height="100%"
        playing={true}
      />
    </div>
  );
};

export default VideoPalyer;
