import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const VideoTitle = ({ id, title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] pl-16 md:top-4 absolute bg-gradient-to-t from-black">
      <h1 className="relative w-full md:w-full top-11 right-10 md:top-0 md:right-0 text-lg md:text-4xl font-bold text-white text">
        {title}
      </h1>
      <p className="hidden md:inline-block md:w-2/5 py-2 text-white">
        {overview}
      </p>
      <div className="text-white relative top-11 right-10 md:top-0 md:right-0 text-sm md:text-base md:font-semibold">
        <Link to={`/movie/${id}`}>
          <button className="px-2 py-1 mr-1 md:py-3 md:mr-2 md:px-5 md:w-32 bg-white bg-opacity-70 text-black hover:bg-opacity-70 hover:bg-gray-600 hover:text-white rounded-lg">
            <PlayCircleOutlineOutlinedIcon /> Play
          </button>
        </Link>
        <Link to={`/movie/${id}`}>
          <button className="px-2 py-1 ml-1  md:py-3 md:px-5 md:w-36 bg-gray-600 bg-opacity-75 hover:bg-white hover:text-black hover:bg-opacity-70  rounded-lg">
            <InfoOutlinedIcon /> More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
