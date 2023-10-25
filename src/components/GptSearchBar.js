import React, { useRef } from "react";
import BackgroundImg from "../assets/netflix-bg.jpg";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahed. Examle Result: Gadar, Sholay, Don, Golmaal, Interstellar";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // Error Page
    }

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="relative w-full h-[300px] ">
      <img className=" w-full h-full fixed" alt="bg-img" src={BackgroundImg} />
      <div className="w-1/2 p-8 absolute bg-black flex justify-between top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-opacity-80">
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
