export const fetchData = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCH_DATA_REQUEST",
  });

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    );
    const data = await response.json();

    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_DATA_FAILURE",
      payload: error,
    });
  }
};
