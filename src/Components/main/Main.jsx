import React, { useEffect, useState } from "react";
import "./main.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const Main = ({
  returnMovies,
  dataReturned,
  setPagination,
  page,
  displayPage,
}) => {
  if (returnMovies) {
    return (
      <div className="container cards-container  d-flex ">
        {returnMovies.map((movie) => {
          let num = Math.round(movie.rating);
          return (
            <Link
              to={`${page}${movie.id}`}
              key={movie.id}
              className="movie-card  text-decoration-none color-white"
            >
              {" "}
              <div className="movie ">
                <img src={movie.medium_cover_image} alt="" />
              </div>
              <div className="movie-info text-center  text-white">
                <div className="title bg-transparent ">
                  {movie.title_english}
                </div>
                <span className="bg-transparent sub-text">
                  <small className="bg-transparent"> {movie.genres[0]}</small>
                </span>{" "}
                |{" "}
                <span className="bg-transparent sub-text">
                  <small className="bg-transparent">{movie.year}</small>
                </span>
                <div className="rating bg-transparent mb-3">
                  <div className="bg-transparent">
                    {Array.from(Array(num), (e, num) => {
                      return (
                        <span className="bg-transparent " key={num}>
                          {
                            <FontAwesomeIcon
                              className="stars bg-transparent"
                              fontSize="11px"
                              color="orange"
                              icon={faStar}
                            />
                          }
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  } else {
    displayPage = (
      <img
        className="container comeHome   "
        src="https://yts.mx/assets/images/website/preloader_video.svg"
        alt=""
      />
    );
  }

  return <div className="container">{displayPage}</div>;
};

export default Main;
