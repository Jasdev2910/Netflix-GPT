import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addPath } from "../utils/slices/pathSlice";
import Footer from "./Footer";

const GptSearchPage = () => {
  const pathname = window.location.pathname;

  const dispatch = useDispatch();

  dispatch(addPath(window.location.pathname));

  return (
    <div className="min-h-screen flex flex-col bg-[#023047]">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
