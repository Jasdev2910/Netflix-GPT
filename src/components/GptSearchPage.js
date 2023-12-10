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
    <div className="w-full h-full bg-[#8ecae6]">
      <Header />
      <GptSearchBar />
      <GptMovieSuggestions />
      <Footer />
    </div>
  );
};

export default GptSearchPage;
