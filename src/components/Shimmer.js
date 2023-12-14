import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full min-h-screen bg-black md:flex md:items-center md:justify-center">
      <Box sx={{ paddingLeft: { xs: 10 } }}>
        <Skeleton
          sx={{
            bgcolor: "grey.900",
            borderRadius: { md: 3 },
            width: { xs: 200, md: 300 },
            height: { xs: 400, md: 600 },
          }}
        />
      </Box>
      <Box sx={{ paddingLeft: { md: 10 }, padding: { xs: 5 } }}>
        <Skeleton
          sx={{
            width: { xs: 270, md: 700 },
            height: { xs: 25, md: 50 },
            bgcolor: "grey.900",
          }}
        />
        <Skeleton sx={{ width: { xs: 200, md: 500 }, bgcolor: "grey.900" }} />
        <Skeleton sx={{ width: { xs: 200, md: 400 }, bgcolor: "grey.900" }} />
        <Skeleton sx={{ width: { xs: 100, md: 400 }, bgcolor: "grey.900" }} />
        <Skeleton sx={{ width: { xs: 100, md: 400 }, bgcolor: "grey.900" }} />
      </Box>
    </div>
  );
};

export default Shimmer;
