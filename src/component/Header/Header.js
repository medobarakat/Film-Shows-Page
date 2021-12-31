import React, { useState } from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchMoviesApi,
  fetchShowsApi,
} from "../../features/Movies/MovieSlice";

export default function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMoviesApi(term));
    dispatch(fetchShowsApi(term));
    setTerm("");
  };
  return (
    <div className="header">
      <div className="container a">
        <div className="title">
          <Link to={"/"}>Movie App</Link>
        </div>
        {/* searching features */}
        <div className="search-feature">
          <form class="form-floating" onSubmit={submitHandler}>
            <div class="input-group mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
              />
              <button
                class="btn btn-outline-danger"
                type="submit"
                id="button-addon2"
              >
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="icon">
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
}
