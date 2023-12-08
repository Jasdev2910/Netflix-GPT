import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Shimmer = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Shimmer;
