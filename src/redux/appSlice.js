import { createSlice } from "@reduxjs/toolkit";
import { HOME } from "../store/types";

const initialState = {
  page: HOME,
  burgerOpen: false,
  highResImageLoaded: false,
  // cursor: {
  //   position: { left: 0, top: 0 },
  //   active: false,
  // },
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

    // setBurgerOpen: (state) => {
    //   state.burgerOpen = !state.burgerOpen;
    // },

    // setCursorPosition: (state, action) => {
    //   state.cursor.position = action.payload;
    // },
    // setCursorActive: (state, action) => {
    //   state.cursor.active = action.payload;
  },
});

export const {
  setPage,
  setHighResImageLoaded,
  // setBurgerOpen,

  // setCursorPosition,
  // setCursorActive,
} = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectHighResImageLoaded = (state) => state.app.highResImageLoaded;

export default appSlice.reducer;
