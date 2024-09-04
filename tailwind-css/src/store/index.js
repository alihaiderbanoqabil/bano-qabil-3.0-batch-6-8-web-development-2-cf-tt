import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./features/cakeSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});
