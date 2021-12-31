import React from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchMoviesOrShowsDetail,
  getSelectedDetail,
  removeSelected,
} from "../../features/Movies/MovieSlice";
const MovieDetail = () => {
  let { ImdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedDetail);
  useEffect(() => {
    dispatch(fetchMoviesOrShowsDetail(ImdbID));
    return () => {
      dispatch(removeSelected());
    };
  }, [dispatch, ImdbID]);
  console.log(data);
  return (
    <div className="section">
      {Object.keys(data).length === 0 ? (
        <>
          <h1 className="text-center display-3 py-5 loading">Loading ...</h1>
        </>
      ) : (
        <>
          <div className="row mt-3">
            <div className="col-md-8">
              <h2 className="title py-3">{data.Title}</h2>
              <div className="specs">
                <div className="row">
                  <p>
                    IMDB Rating <i class="fa fa-star" aria-hidden="true"></i> :{" "}
                    {data.imdbRating}
                  </p>
                  <p className="ml-3">
                    IMDb Votes <i class="fas fa-thumbs-up"></i> :{" "}
                    {data.imdbVotes}
                  </p>
                  <p className="ml-3">
                    Runtime <i class="fas fa-border-all"></i> : {data.Runtime}
                  </p>
                  <p className="ml-3">
                    Year <i class="fas fa-birthday-cake"></i> : {data.Year}
                  </p>
                </div>
              </div>
              <div className="plot">
                <div className="row">{data.Plot}</div>
              </div>
              <div className="info mt-3">
                <h5>
                  Director: <span className="ml-4">{data.Director}</span>
                </h5>
                <h5 className="mt-3">
                  Cast: <span className="ml-4">{data.Actors}</span>
                </h5>
                <h5 className="mt-3">
                  Genre: <span className="ml-4">{data.Genre}</span>
                </h5>
                <h5 className="mt-3">
                  Languages: <span className="ml-4">{data.Language}</span>
                </h5>
                <h5 className="mt-3">
                  Awards: <span className="ml-4">{data.Awards}</span>
                </h5>
              </div>
            </div>
            <div className="col-md-4 py-3">
              <img src={data.Poster} alt="" className="img-fluid" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
