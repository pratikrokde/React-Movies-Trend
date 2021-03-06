const initialState = {
  loading: false,
  movies: [],
  error: null,
};

export const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_DATA_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        loading: false,
        movies: payload,
      };

    case "FETCH_DATA_FAILURE":
      return {
        movies: [],
        error: payload,
      };

    case "SORT_BY_RATING":
      const newMovies = state.movies.slice();
      newMovies.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
      return { ...state, movies: newMovies };

    case "SORT_BY_NAME":
      const newMoviesName = state.movies.slice();
      newMoviesName.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      });
      return { ...state, movies: newMoviesName };

    default:
      return state;
  }
};
