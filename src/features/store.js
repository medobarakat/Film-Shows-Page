import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./Movies/MovieSlice";

export const store = configureStore({
  reducer: {
    Data: MovieSlice,
  },
});
