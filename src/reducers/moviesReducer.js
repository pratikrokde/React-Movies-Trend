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

    default:
      return state;
  }
};
