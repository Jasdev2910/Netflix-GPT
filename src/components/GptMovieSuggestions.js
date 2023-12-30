import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="-mt-32  p-2  md:p-4 relative">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
          textColor={"text-white"}
          bgColor={"bg-[#023050]"}
          titleColor={"text-[#8ecae6]"}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
