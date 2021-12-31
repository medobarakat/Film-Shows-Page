import React from "react";
import { useSelector } from "react-redux";
import { getALLSeries } from "../../features/Movies/MovieSlice";
import TheCard from "../TheCard/TheCard";
import "./SeriesListing.scss";
import Slider from "react-slick";
import { Settings } from "../../common/SliderSettings";

export default function MovieListing() {
  const series = useSelector(getALLSeries);
  let renderSeries = "";
  renderSeries =
    series.Response === "True" ? (
      series.Search.map((serie, index) => {
        return <TheCard key={index} data={serie} />;
      })
    ) : (
      <div className="series-error">
        <h2 className="text-center">Loading Series</h2>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="mt-3 p-3 text-center">Shows</h2>
        <div className="movie-container">
          {" "}
          <Slider {...Settings}>{renderSeries}</Slider>
        </div>
      </div>
    </div>
  );
}
