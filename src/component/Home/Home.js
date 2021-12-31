import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchMoviesApi,
  fetchShowsApi,
} from "../../features/Movies/MovieSlice";
import SeriesListing from "../SeriesListing/SeriesListing";

const Home = () => {
  const dispatch = useDispatch();
  const defaultTerm = "harry";
  useEffect(() => {
    dispatch(fetchMoviesApi(defaultTerm));
    dispatch(fetchShowsApi(defaultTerm));
  }, [dispatch]);
  return (
    <div>
      <div className="img-banner"></div>
      <MovieListing />
      <SeriesListing />
    </div>
  );
};

export default Home;
