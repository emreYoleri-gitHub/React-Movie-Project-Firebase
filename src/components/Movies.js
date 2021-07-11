import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { dataActions, movieActions } from "../redux/actions";

const Movies = ({ history }) => {
  const [movies] = useState(useSelector((state) => state.movieReducer.movies));
  const dispatch = useDispatch();
  const { getUsers } = bindActionCreators(dataActions, dispatch);
  const { selectMovie } = bindActionCreators(movieActions, dispatch);

  const examineMovieCard = async (id) => {
    await getUsers();
    await selectMovie(id);
    history.push(`/login`);
  };
  if (movies.length) {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="mb-1 me-1 p-4 mt-3"
              style={{
                height: "25rem",
                background: "#F0F4F3",
                borderRadius: "10px",
                width: "15rem",
              }}
            >
              <div className="text-center">
                {movie.Title.length > 15 ? (
                  <p>{movie.Title}</p>
                ) : (
                  <h4>{movie.Title}</h4>
                )}
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  height="250"
                  width="200"
                />

                <button
                  onClick={() => examineMovieCard(movie.imdbID)}
                  className="btn btn-danger mt-3 mb-3"
                >
                  İncele
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <h2>Arattığınız film'e ulaşmadık. Lütfen farklı bir film giriniz</h2>
    );
  }
};

export default withRouter(Movies);
