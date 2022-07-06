import React, { useState, useEffect } from "react";
import "./Genry";
import './genries.css'
const Genry = ({ dataReturned, returnMovies, setGenry, pagination }) => {
  let genry = [
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
    <div  className="genreMain">
      <style jsx>
        {`
          .fill:checked + label {
            border-right: 10px solid #a42618;
            color: #ffff;
          }
          .form-check {
            padding-left: 0;
          }
          .changeBtn,
          .changeBtn:hover {
            font-weight: bold;
            font-size: 1.1rem;
            color: #ffff;
            border: none;
            border-color: #a42618;
          }
          .genryBtn {
            borderrad: #a42618;
            color: #d5d7dc;
            text-align: start;
            font-family: "Roboto", sans-serif;
          }
          .genryBtn:hover {
            border-color: #a42618;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="genreItems  position-fixed">
        <small className=" changeBtn d-grid getGenries  ">Choose </small>
        <div>
          <small
            className="btn bg-danger my-3"
            onClick={() => {
              setGenry("");

              //ggggggggggggggggggggg
            }}
          >
            {" "}
            Clear
          </small>
        </div>
        {genry.map((value, index) => (
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
    </div>
  );
};

export default Genry;
