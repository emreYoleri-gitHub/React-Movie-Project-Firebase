import axios from "axios";
export const getMovies = (keyword) => async (dispatch) => {
  await axios
    .get(`https://www.omdbapi.com/?i=tt3896198&apikey=b13dff4&s=${keyword}`)
    .then((response) => {
      let movies = response.data.Search;
      movies
        ? dispatch({ type: "GET_MOVİES", payload: movies })
        : dispatch({ type: "GET_MOVİES", payload: [] });
    })
    .catch((err) => console.log(err));
};

export const selectMovie = (id)=> dispatch => {
  dispatch({
    type : "SELECT_MOVİE",
    payload : id
  })
}
export const addMovieToList = (movie) => (dispatch) => {
  dispatch({
    type: "ADD_MOVİE_TO_LIST",
    payload: movie,
  });
};

export const removeMovieFromList = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_MOVIE_FROM_LIST",
    payload: id,
  });
};
