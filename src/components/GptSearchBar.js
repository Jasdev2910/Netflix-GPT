import React from "react";
import BackgroundImg from "../assets/netflix-bg.jpg";
import lang from "../utils/LanguageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="relative w-full h-[300px] ">
      <img
        className="absolute w-full h-full object-cover"
        alt="bg-img"
        src={BackgroundImg}
      />
      <div className="w-1/2 p-8 absolute bg-black flex justify-between top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-opacity-50">
        <input
          className="px-4 py-2 w-4/5 text-white rounded-full bg-gray-700 hover:bg-gray-600 border-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="w-1/5 px-4 py-2 ml-2 bg-red-700 hover:bg-red-600 font-medium rounded-full">
          {lang[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
