import React from "react";
import { Link } from "react-router-dom";

import "./TheCard.scss";
const TheCard = ({ data }) => {
  return (
    <div class="card bg-dark">
      <Link to={`/movie/${data.imdbID}`}>
        <img
          src={data.Poster}
          className="card-img-top img-fluid"
          alt={data.Title}
        />
        <div className="card-body">
          <p className="card-text-1">{data.Title}</p>
          <p className="card-text">{data.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default TheCard;
