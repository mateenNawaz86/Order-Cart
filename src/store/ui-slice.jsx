import { createSlice } from "@reduxjs/toolkit";

// initial state for UI-slice
const uiState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "UI",
  initialState: uiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    // method for show the notification
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
