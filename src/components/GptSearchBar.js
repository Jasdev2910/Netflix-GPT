import React, { useRef } from "react";
import BackgroundImg from "../assets/netflix-bg.jpg";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/slices/gptSlice";
import MovieIcon from "../assets/cinema-icon.png";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const movieResults = useSelector((store) => store.gpt.movieResults);

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
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahead. Examle Result: Gadar, Sholay, Don, Golmaal, Interstellar, Iron Man, Spiderman, 3 Idiots, Jawan, Leo.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // Error Page
    }

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div>
      <div className="relative w-full h-[300px] bg-[#023047]">
        <div className=" w-11/12 md:w-3/5 p-3 md:-1/2 md:p-8 absolute flex justify-between top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <input
            ref={searchText}
            className="w-11/12 px-2 py-2 text-sm md:text-base outline-none placeholder-black md:px-4 md:py-2 md:w-4/5 shadow-lg rounded-full bg-[#8ecae6] hover:bg-[#bde0fe] border-none"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            onClick={handleGptSearchClick}
            className="text-sm ml-1 px-1 md:text-base md:w-1/5 md:px-4 md:py-2 md:ml-2 bg-[#219ebc] hover:bg-[#ffb703] font-medium rounded-full"
          >
            {lang[langKey].search}
          </button>
        </div>
      </div>
      {movieResults === null && (
        <div className="w-[200px] md:w-[300px] py-24 md:py-10 relative top-28 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <img className="" src={MovieIcon} alt="cinema-icon" />
          <p className="text-center text-2xl font-bold text-[#8ecae6]">
            Search for Movies
          </p>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
