import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full aspect-video pt-[15%] pl-16 absolute bg-gradient-to-t from-black">
      <h1 className="text-4xl font-bold text-white text">{title}</h1>
      <p className="w-2/5 py-2 text-white">{overview}</p>
      <div className="text-white font-semibold">
        <button className="py-3 mr-2 px-5 w-32 bg-white bg-opacity-70 text-black hover:bg-opacity-70 hover:bg-gray-600 hover:text-white rounded-lg">
          <PlayCircleOutlineOutlinedIcon /> Play
        </button>
        <button className="py-3 px-5 w-36 bg-gray-600 bg-opacity-75 hover:bg-white hover:text-black hover:bg-opacity-70  rounded-lg">
          <InfoOutlinedIcon /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
