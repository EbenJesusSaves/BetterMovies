import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./favmov.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Upcoming = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c2356ea906msh491a7bdbced25c8p1ca321jsncf59f3f6d19b",
      "X-RapidAPI-Host": "latest-movies.p.rapidapi.com",
    },
  };

  const [upComingMovies, setUpComingMovies] = useState("");
  let api = "https://latest-movies.p.rapidapi.com/movies";
  useEffect(() => {
    fetch(`${api}`, options)
      .then((response) => response.json())
      .then((response) => setUpComingMovies(response))
      .catch((err) => console.error(err));
  }, [api]);

  let displayPage;

  if (upComingMovies) {
    return (
      <div className="container cards-container justify-content-center ">
        <style JSX>
          {`
                .book {
                z-index: 3;
                 color: #fff;
               background-color:#a42618;
               border-color: #a42618;;}

  .page-link,.page-link:hover{
    color:#a42618
  }


`}
        </style>

        {upComingMovies.map((movie) => {
          return (
            <div className="removeIt">
              {" "}
              <div className="">
                <div className="btn">
                  {" "}
                  <a href={movie.url} target="_blank" className="btn book">
                    Download
                  </a>{" "}
                </div>

                <div className="title bg-transparent d-flex  ">
                  {movie.title}
                </div>
                <span className="bg-transparent ">
                  {
                    <FontAwesomeIcon
                      className="stars  bg-transparent"
                      fontSize="11px"
                      color="orange"
                      icon={faStar}
                    />
                  }
                </span>
                <span className="bg-transparent ">
                  {
                    <FontAwesomeIcon
                      className="stars bg-transparent"
                      fontSize="11px"
                      color="orange"
                      icon={faStar}
                    />
                  }
                </span>
                <span className="bg-transparent ">
                  {
                    <FontAwesomeIcon
                      className="stars bg-transparent"
                      fontSize="11px"
                      color="orange"
                      icon={faStar}
                    />
                  }
                </span>
                <span className="bg-transparent ">
                  {
                    <FontAwesomeIcon
                      className="stars bg-transparent"
                      fontSize="11px"
                      color="orange"
                      icon={faStar}
                    />
                  }
                </span>
                <span className="bg-transparent ">
                  {
                    <FontAwesomeIcon
                      className="stars bg-transparent"
                      fontSize="11px"
                      color="orange"
                      icon={faStar}
                    />
                  }
                </span>
                <span className="bg-transparent text-center ">
                  {
                    <FontAwesomeIcon
                      className="stars bg-transparent"
                      fontSize="11px"
                      color="orange"
                      icon={faStar}
                    />
                  }
                </span>
              </div>
            </div>
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

  return <div>{displayPage}</div>;
};

export default Upcoming;
