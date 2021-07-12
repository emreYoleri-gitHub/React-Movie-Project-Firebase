import React from "react";
import { useSelector } from "react-redux";

const Movie = (props) => {
  const movie = useSelector((state) => state.movieReducer.currentMovie);
  if (movie) {
    return (
      <div
        className="mx-auto text-center mt-2 rounded-3 p-3"
        style={{
          background: "#B7D7D8",
          width: "20rem",
          boxSizing: "content-box",
        }}
      >
        <h1 className="mt-2 mb-3">{movie.Title}</h1>
        <img
          src={movie.Poster}
          alt={movie.Title}
          height="350"
          className="rounded-3"
        />
        <p className="mt-2">Type : {movie.Type}</p>
        <p className="mt-2">Year : {movie.Year}</p>
      </div>
    );
  } else {
    props.history.push("/");
    return <div></div>;
  }
};

export default Movie;
