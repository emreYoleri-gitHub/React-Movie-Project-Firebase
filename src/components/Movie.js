import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { movieActions } from "../redux/actions";

const Movie = (props) => {
  const movie = useSelector((state) => state.movieReducer.currentMovie);
  const myList = useSelector((state) => state.movieReducer.myMovieList);
  const dispatch = useDispatch();
  const { addMovieToList, removeMovieFromList } = bindActionCreators(
    movieActions,
    dispatch
  );
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
        {myList.find((listMovie) => listMovie.imdbID === movie.imdbID) ? (
          <button
            className="btn btn-danger"
            onClick={() => removeMovieFromList(movie.imdbID)}
          >
            Remove From List
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => addMovieToList(movie)}
          >
            Add List
          </button>
        )}
      </div>
    );
  } else {
    props.history.push("/");
    return <div></div>;
  }
};

export default Movie;
