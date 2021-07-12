const initialState = {
  movies: [],
  currentMovie: null,
  myMovieList: localStorage.getItem("myList")
    ? JSON.parse(localStorage.getItem("myList"))
    : [],
};

export const movieReducer = (state = initialState, action) => {
  let myList = JSON.parse(localStorage.getItem("myList"));
  if (!myList) {
    localStorage.setItem("myList", JSON.stringify([]));
  }

  switch (action.type) {
    case "GET_MOVİES":
      return {
        ...state,
        movies: action.payload,
      };

    case "SELECT_MOVİE":
      return {
        ...state,
        currentMovie: state.movies.find(
          (movie) => movie.imdbID === action.payload
        ),
      };

    case "ADD_MOVİE_TO_LIST":
      localStorage.setItem(
        "myList",
        JSON.stringify([...myList, action.payload])
      );
      return {
        ...state,
        myMovieList: [...state.myMovieList, action.payload],
      };

    case "REMOVE_MOVIE_FROM_LIST":
      let newList = state.myMovieList.filter(
        (movie) => movie.imdbID !== action.payload
      );
      localStorage.setItem("myList", JSON.stringify(newList));
      return {
        ...state,
        myMovieList: newList,
      };
    default:
      return state;
  }
};

export default movieReducer;
