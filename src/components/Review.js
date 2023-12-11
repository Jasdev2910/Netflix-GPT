import React from "react";
import { Avatar, Box, IconButton, Rating, Tooltip } from "@mui/material";

const Review = ({ userName, rating, date, content, lineClamp }) => {
  return (
    <div className="m-5 shadow-xl py-4 px-3 bg-white rounded-lg">
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
            <p className="font-light text-sm">{date}</p>
          </div>
        </div>
        <div className="ml-5">
          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
      <div className={`px-8 ${lineClamp}`}>{content}</div>
    </div>
  );
};

export default Review;
