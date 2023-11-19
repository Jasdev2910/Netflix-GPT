import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    videos: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addVideos } = mediaSlice.actions;
export default mediaSlice.reducer;
