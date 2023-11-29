import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addPath } from "../utils/slices/pathSlice";

const GptSearchPage = () => {
  const pathname = window.location.pathname;
  console.log(pathname);
  const dispatch = useDispatch();

  dispatch(addPath(window.location.pathname));

  return (
    <div className="bg-black">
      <Header />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
