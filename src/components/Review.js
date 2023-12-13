import React, { useEffect } from "react";
import { Avatar, Box, IconButton, Rating, Tooltip } from "@mui/material";
import { useState } from "react";

const Review = ({ userName, rating, date, content, lineClamp }) => {
  let postDate = new Date(date);
  const [newlineClamp, setlineClamp] = useState(lineClamp);

  const formattedDate = postDate.toLocaleDateString();
  console.log(formattedDate);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLineClamp = () => {
    if (newlineClamp === lineClamp) {
      setlineClamp("");
    } else {
      setlineClamp(lineClamp);
    }
  };

  return (
    <div
      onClick={handleLineClamp}
      className="m-2 md:m-5 py-1 px-1 shadow-xl md:py-4 md:px-3 bg-white rounded-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex ">
          <div className="pb-2">
            <Box>
              <Tooltip>
                <IconButton>
                  <Avatar sx={{ width: 40, height: 40, bgcolor: "#ef233c" }}>
                    {userName?.at(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
          </div>
          <div>
            <h3 className="font-semibold text-lg pt-1">{userName}</h3>
            <p className="font-light text-sm">{formattedDate}</p>
          </div>
        </div>
        <div className="md:ml-5">
          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
      <div className={`px-3 md:px-8  ${newlineClamp}`}>{content}</div>
      {newlineClamp === lineClamp && (
        <p className="ml-3 md:ml-7 text-blue-400 cursor-pointer">
          Tap to Read More
        </p>
      )}
    </div>
  );
};

export default Review;
