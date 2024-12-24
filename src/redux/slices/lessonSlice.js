import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessonsName: [],
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setLessonsName(state, action) {
      state.lessonsName = action.payload;
    },
  },
});

export const { setLessonsName } = lessonSlice.actions;

export default lessonSlice.reducer;
