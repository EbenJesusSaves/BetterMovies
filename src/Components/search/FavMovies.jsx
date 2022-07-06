import React, { useState, useEffect } from "react";

const FavMovies = () => {
  const [genry, setGenry] = useState("Fantasy");

  let api = `https://yts.mx/api/v2/list_movies.json?sort_by=seeds&genre=${genry}&limit=20&page=1`;

  const [returnMoviesFav, setReturnedMoviesFav] = useState("");

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setReturnedMoviesFav(data.data.movies);
    })();
  }, [api]);
  console.log(returnMoviesFav);
  return <div></div>;
};

export default FavMovies;
