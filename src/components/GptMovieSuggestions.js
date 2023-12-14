import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  console.log(movieResults);

  return (
    <div className="-mt-16  p-2  md:p-4 relative">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
          textColor={"text-white"}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
