import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { dataActions } from "../redux/actions";

const MyList = ({ history }) => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.movieReducer.myMovieList);
  const { removeMovieFromList } = bindActionCreators(dataActions, dispatch);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <button
            className="btn btn-primary mt-2"
            onClick={() => history.push("/")}
          >
            Home
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Movie Name</th>
                <th>Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myList.map((movie, index) => {
                return (
                  <tr>
                    <td key={index}>{index}</td>
                    <th>{movie.Title}</th>
                    <td>{movie.Year}</td>
                    <td>
                      <button
                        className="btn btn-dark"
                        onClick={() => removeMovieFromList(movie.imdbID)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
