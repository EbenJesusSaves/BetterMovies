import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import "./downloadmovies.css";
const DownloadMovies = () => {
  let { id } = useParams();

  let api = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;

  const [dataReturned1, setDataReturned1] = useState("");
  const [torentData, setTorentData] = useState("");

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setDataReturned1(data.data.movie);
      setTorentData(data.data.movie.torrents);
    })();
  }, [api]);

  let displayPage;
  console.log(dataReturned1);
  if (id) {
    return (
      <div>
        <Navbar 
        
        
        />
        <div className="container-xxl cards-container d-flex  justify-content-center">
          <div className="downloadMovie mb-3 hello">
            <div className="backgroundImage ">
              <img src={dataReturned1.large_screenshot_image1} alt="" />
            </div>
            <div className="toStyle"></div>
            <div className="title-1">{dataReturned1.title_english}</div>{" "}
            <div className="movieDetails">
              <div className="imageForMovie">
                <img src={dataReturned1.medium_cover_image} alt="" />
              </div>
              <div className="capture">
                <div className="SubDetails">
                  <span className="genre"> {dataReturned1.genres}</span> |{" "}
                  <span className="rating-1">
                    Rating {dataReturned1.rating}
                  </span>{" "}
                  |
                  <span className="RunTime">
                    RunTime {dataReturned1.runtime}
                  </span>{" "}
                  | <span className="year">Year {dataReturned1.year}</span>
                </div>

                <div className="downloadTorrent">
                  <div className="torrents d-flex">
                    {torentData
                      ? torentData.map((torent) => {
                          return (
                            <div className="torrent ">
                              <div>
                                {" "}
                                <a className="downloadLink " href={torent.url}>
                                  Download
                                </a>
                              </div>
                              <div className="spanClass">
                                {" "}
                                <span className="span">
                                  Quality {torent.quality}
                                </span>{" "}
                                |{" "}
                                <span className="span">Size {torent.size}</span>
                                |{" "}
                                <span className="span">Type {torent.type}</span>
                              </div>
                            </div>
                          );
                        })
                      : "now Fetching torent data"}
                  </div>
                </div>

                <div className="fullDetails">
                  <p>{dataReturned1.description_full}</p>
                </div>
              </div>
            </div>
          
            <div className="preview">
              {" "}
              <div className="trailers ">
                <iframe
                  onClick={{ PictureInPictureWindow: "true" }}
                  width={500}
                  height={200}
                  src={`https://www.youtube.com/embed/${dataReturned1.yt_trailer_code}`}
                  title="YouTube video player"
                  frameborder={0}
                ></iframe>
              </div>{" "}
              <div className="screenshots">
                <span>
                  <img
                    width={330}
                    height={200}
                    src={dataReturned1.medium_screenshot_image1}
                    alt=""
                  />
                </span>
                <span>
                  <img
                    width={330}
                    height={200}
                    src={dataReturned1.medium_screenshot_image2}
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          {console.log(dataReturned1)}
        </div>
      </div>
    );
  } else {
    displayPage = (
      <img
        className="container d-flex align-items-center justify-content-center"
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
        alt=""
      />
    );
  }

  return <div className="moviedetails">{displayPage}</div>;
};

export default DownloadMovies;
