import { createSlice } from "@reduxjs/toolkit";
import { HOME } from "../store/types";

const initialState = {
  page: HOME,
  burgerOpen: false,
  highResImageLoaded: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setHighResImageLoaded: (state, action) => {
      state.highResImageLoaded = action.payload;
    },
  },
});

export const { setPage, setHighResImageLoaded } = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectHighResImageLoaded = (state) => state.app.highResImageLoaded;

export default appSlice.reducer;
