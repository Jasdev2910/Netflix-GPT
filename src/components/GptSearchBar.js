import React, { useRef } from "react";
import BackgroundImg from "../assets/netflix-bg.jpg";
import lang from "../utils/LanguageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahed. Examle Result: Gadar, Sholay, Don, Golmaal, Interstellar";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);
  };

  return (
    <div className="relative w-full h-[300px] ">
      <img
        className="absolute w-full h-full object-cover"
        alt="bg-img"
        src={BackgroundImg}
      />
      <div className="w-1/2 p-8 absolute bg-black flex justify-between top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-opacity-50">
        <input
          ref={searchText}
          className="px-4 py-2 w-4/5 text-white rounded-full bg-gray-700 hover:bg-gray-600 border-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="w-1/5 px-4 py-2 ml-2 bg-red-700 hover:bg-red-600 font-medium rounded-full"
        >
          {lang[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
