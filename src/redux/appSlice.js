import { createSlice } from "@reduxjs/toolkit";
import { HOME } from "../store/types";

const initialState = {
  page: HOME,
  burgerOpen: false,
  highResImageLoaded: false,
  cursor: "",
  carouselItems: [],
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
    setCursor: (state, action) => {
      state.cursor = action.payload;
    },
    setCarouselItems: (state, action) => {
      state.carouselItems = action.payload;
    },
  },
});

export const { setPage, setHighResImageLoaded, setCursor, setCarouselItems } =
  appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectHighResImageLoaded = (state) => state.app.highResImageLoaded;
export const selectCursor = (state) => state.app.cursor;
export const selectCarouselItems = (state) => state.app.carouselItems;

export default appSlice.reducer;
