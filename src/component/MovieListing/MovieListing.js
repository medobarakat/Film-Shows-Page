import React from "react";
import { useSelector } from "react-redux";
import { getALLMovies } from "../../features/Movies/MovieSlice";
import TheCard from "../TheCard/TheCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { Settings } from "../../common/SliderSettings";

export default function MovieListing() {
  const movies = useSelector(getALLMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <TheCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h2 className="text-center">Loading Movies</h2>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="mt-3">Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
    </div>
  );
}
