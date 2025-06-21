import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/eventSlice";
const appStore = configureStore({
  reducer: {
    event: eventReducer,
  },
});

export default appStore;
