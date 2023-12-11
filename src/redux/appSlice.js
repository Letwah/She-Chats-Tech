import { createSlice } from "@reduxjs/toolkit";

import { HOME } from "../store/types";

const initialState = {
  page: HOME,
  burgerOpen: false,

  cursor: {
    position: { left: 0, top: 0 },
    active: false,
  },
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    // setBurgerOpen: (state) => {
    //   state.burgerOpen = !state.burgerOpen;
    // },
    // setToastContent: (state, action) => {
    //   state.toastContent = action.payload;
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
  // setBurgerOpen,
  // setToastContent,
  // setCursorPosition,
  // setCursorActive,
} = appSlice.actions;

export const selectPage = (state) => state.app.page;

export default appSlice.reducer;
