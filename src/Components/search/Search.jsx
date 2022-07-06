import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Main from "../main/Main";
import FavMovies from "./FavMovies";
import Upcoming from "../lastAside/Upcoming";

const Search = ({ setSearchMovie, setPagination, displayPage }) => {
  const valueRef = useRef(null);
  function changeSate() {
    valueRef.preventDefault()
    setSearchMovie(valueRef.current.value);
  }

  return (
    <div className=" d-flex justify-content-start  align-item-center">
      <style jsx>
        {`
          .styleInput {
            border-radius: 16px;
            border-color: #d5d7dc;
            online: none;
            margin: 2px 3rem;
            width: 80%;
            color: white;
          }
          .styleInput:focus {
            border-color: #5a0b08;
            online: none;
            color: white;
          }
        `}
      </style>
      <div className="position-fixed mx-4">
        <div className="recentMovies">
          <small>DownLoad via Telegram</small>
          <Upcoming />
        </div>
      </div>
    </div>
  );
};

export default Search;
