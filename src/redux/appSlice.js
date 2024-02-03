import { createSlice } from "@reduxjs/toolkit";
import { LANDING } from "../store/types";

const initialState = {
  page: LANDING,
  burgerOpen: false,
  highResImageLoaded: false,
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

    setCarouselItems: (state, action) => {
      state.carouselItems = action.payload;
    },
  },
});

export const {
  setPage,
  setHighResImageLoaded,

  setCarouselItems,
} = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectHighResImageLoaded = (state) => state.app.highResImageLoaded;

export const selectCarouselItems = (state) => state.app.carouselItems;

export default appSlice.reducer;
