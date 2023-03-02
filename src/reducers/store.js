import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientsReducer/index.js";

export const store = configureStore({
  reducer: {
    clientsReducer
  }
});
