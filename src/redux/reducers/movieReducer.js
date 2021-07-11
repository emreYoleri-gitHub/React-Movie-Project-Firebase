const initialState = {
  movies: [],
  currentMovie: null,
};

export const movieReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default movieReducer;
