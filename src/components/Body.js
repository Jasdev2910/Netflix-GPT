import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import Movie from "./Movie";
import GptSearchPage from "./GptSearchPage";
import Comments from "./Comments";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:movieId",
      element: <Movie />,
    },
    { path: "/gptSearch", element: <GptSearchPage /> },
    { path: "/review", element: <Comments /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
