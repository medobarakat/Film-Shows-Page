import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Api/MovieApi";
import { ApiKey } from "../../common/Api/MovieApiKey";

export const fetchMoviesApi = createAsyncThunk(
  "movies/fetchMoviesApi",
  async (term) => {
    const res = await MovieApi.get(`?apiKey=${ApiKey}&s=${term}&type=movie`);
    return res.data;
  }
);
export const fetchShowsApi = createAsyncThunk(
  "movies/fetchShowsApi",
  async (term) => {
    const res = await MovieApi.get(`?apiKey=${ApiKey}&s=${term}&type=series`);
    return res.data;
  }
);

export const fetchMoviesOrShowsDetail = createAsyncThunk(
  "movies/fetchMoviesOrShowsDetail",
  async (id) => {
    const res = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
    return res.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  selecteditem: {},
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelected: (state) => {
      state.selecteditem = {};
    },
  },
  extraReducers: {
    [fetchMoviesApi.pending]: () => {
      console.log("pending");
    },
    [fetchMoviesApi.fulfilled]: (state, { payload }) => {
      console.log("Movies fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchShowsApi.fulfilled]: (state, { payload }) => {
      console.log("Shows fetched successfully");
      return { ...state, series: payload };
    },
    [fetchMoviesOrShowsDetail.fulfilled]: (state, { payload }) => {
      console.log("item fetched successfully");
      return { ...state, selecteditem: payload };
    },
  },
});

export const { addMovies, removeSelected } = MovieSlice.actions;
export default MovieSlice.reducer;
export const getALLMovies = (state) => state.Data.movies;
export const getALLSeries = (state) => state.Data.series;
export const getSelectedDetail = (state) => state.Data.selecteditem;
