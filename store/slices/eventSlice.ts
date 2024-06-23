import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: null,
  },
  reducers: {
    addEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});
export const { addEvents } = eventSlice.actions;
export default eventSlice.reducer;
