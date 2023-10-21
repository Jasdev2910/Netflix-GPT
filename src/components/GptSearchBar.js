import React from "react";
import BackgroundImg from "../assets/netflix-bg.jpg";

const GptSearchBar = () => {
  return (
    <div className="relative w-full h-[300px] ">
      <img
        className="absolute w-full h-[300px]"
        alt="bg-img"
        src={BackgroundImg}
      />
      <div className="w-1/2 p-5 absolute bg-black flex justify-between top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-opacity-50">
        <input
          className="px-4 py-2 w-4/5 "
          placeholder="What would you like to watch today?"
        />
        <button className="w-1/5 px-4 py-2 bg-red-700">Search</button>
      </div>
    </div>
  );
};

export default GptSearchBar;
