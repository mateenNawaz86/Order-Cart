import { createSlice } from "@reduxjs/toolkit";

// initial state for UI-slice
const uiState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "UI",
  initialState: uiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
