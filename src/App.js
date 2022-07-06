import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Genry from "./Components/firstAside/Genry";
import Main from "./Components/main/Main";
import { useEffect, useState } from "react";
import Pigination from "./Components/main/Pigination";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import DownloadMovies from "./Components/main/DownloadMovies";
import { Navbar } from "./Components/navbar/Navbar";
import Search from "./Components/search/Search";
import Upcoming from "./Components/lastAside/Upcoming";
import Slider from "./Components/main/Slider";

function App() {
  return (
    <Browser>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DownloadMovies />} />
        </Routes>
      </div>
    </Browser>
  );
}

const Home = () => {
  const [genry, setGenry] = useState("");
  const [pagination, setPagination] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");

  let api = `https://yts.mx/api/v2/list_movies.json?sort_by=seeds&genre=${genry}&limit=20&page=${pagination}&query_term=${searchMovie}`;

  const [dataReturned, setDataReturned] = useState("");
  const [returnMovies, setReturnedMovies] = useState("");
  const [displayPage, setDisplayPage] = useState("");

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setDataReturned(data.data);
    })();
  }, [api]);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setReturnedMovies(data.data.movies);
    })();
  }, [api]);

  return (
    <div className="position-relative">
      <Navbar
        setSearchMovie={setSearchMovie}
        setPagination={setPagination}
        displayPage={setDisplayPage}
        setGenry={setGenry}
        pagination={pagination}
      />
      <div className="App container-fluid  d-flex justify-content-center">
        <div className="col-1   gap-1 first-side">
          <div className="row">
            <Genry
              dataReturned={dataReturned}
              setGenry={setGenry}
              returnMovies={returnMovies}
              pagination={setPagination}
            />
          </div>
        </div>{" "}
        //
        <div className="col-10 col-md-8  main">
          <div className="row ">
            {pagination === 1 ? <Slider /> : ""}
            <Main
              page="/"
              returnMovies={returnMovies}
              setPagination={setPagination}
              dataReturned={dataReturned}
              displayPage={setDisplayPage}
            />
            {returnMovies && (
              <Pigination
                setPagination={setPagination}
                dataReturned={dataReturned}
              />
            )}
          </div>
        </div>
        <div className="col-1 col-md-2  md-2 last-side">
          <div className="row  ">
            <Search
              setSearchMovie={setSearchMovie}
              setPagination={setPagination}
              displayPage={setDisplayPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
