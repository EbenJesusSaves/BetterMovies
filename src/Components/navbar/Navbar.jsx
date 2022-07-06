import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Genry from "../firstAside/Genry";
import "./navbar.css";
export const Navbar = ({
  setSearchMovie,
  setPagination,
  displayPage,
  pagination,
  setGenry,
}) => {
  const valueRef = useRef(null);
  function changeSate(e) {
    e.preventDefault();
    setSearchMovie(valueRef.current.value);
  }

  let genryFrom = [
    "Action",
    " Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",

    "History",
    "  Horror",

    "Musical",
    "Mystery",
    "  Romance",
    "   Sci-Fi",

    "   Sport",

    "  Thriller",
    "  War",
    "  Western",
  ];

  return (
    <>
      <nav class="navbar navbar-expand-lg  navbar-light">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">
            University of Graphics
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-white"
                  onClick={() => {
                    setSearchMovie("");
                  }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <div
                  class="nav-link text-white cursor-pointer"
                  onClick={() => {
                    setGenry("");
                  }}
                >
                  Clear Genres
                </div>
              </li>
            </ul>
            <form class="d-flex">
              <input
                ref={valueRef}
                class="form-control me-2"
                type="search"
                placeholder="Search"
                onChange={(e) => {
                  setPagination(1);
                  setSearchMovie(e.value);

                  //kkkkkkkkkkkkkkkkkk
                }}
                aria-label="Search"
              />
              <button
                onClick={changeSate}
                class="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="genres"></div>
      </nav>
      <div className="genres genre-in-nav flex-wrap text-align-center text-white">
        {genryFrom.map((value, index) => (
          <div key={index}>
            {" "}
            <div className="form-check">
              <input
                className="fill"
                onClick={() => {
                  setGenry(value);
                  pagination(1);
                }}
                type="radio"
                name="Genries"
                id={`${index + 1}`}
              />
              <label
                class="btn  d-grid btn-button genryBtn"
                for={`${index + 1}`}
              >
                {value}
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
