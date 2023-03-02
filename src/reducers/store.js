import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientsReducer/index.js";
import goodsReducer from "./goodsReducer/index.js";

export const store = configureStore({
  reducer: {
    clientsReducer,
    goodsReducer
  }
});
