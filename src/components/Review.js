import React from "react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";

const Review = ({ userName, rating, date, content }) => {
  return (
    <div className="outline-2">
      <div className="flex items-center">
        <div className="py-4">
          <Box>
            <Tooltip>
              <IconButton>
                <Avatar className="" sx={{ width: 40, height: 40 }}>
                  {userName.at(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{userName}</h3>
          <p className="font-light text-sm">{date}</p>
        </div>
      </div>
      <div className="px-8 py-2">{content}</div>
    </div>
  );
};

export default Review;
