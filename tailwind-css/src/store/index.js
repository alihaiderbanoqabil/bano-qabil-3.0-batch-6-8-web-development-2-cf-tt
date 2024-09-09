import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./features/cakeSlice";
import { todoReducer } from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    todo: todoReducer,
  },
});
