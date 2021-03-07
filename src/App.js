import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  fetchDataForSearch,
  sortByName,
  sortByRating,
} from "./actions";
import "./App.css";
import Movies from "./Movies";
import SearchInput from "./SearchInput";
import SortMovies from "./SortMovies";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [inputMovie, setInputMovie] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const sortByRatingHandler = () => {
    dispatch(sortByRating());
  };

  const sortByNameHandler = () => {
    dispatch(sortByName());
  };
  //movie by name -> search
  const getInputValue = (e) => {
    setInputMovie(e.target.value);
  };
  // seach movie -> submit btn
  const submitBtnHandler = (e) => {
    e.preventDefault();
    dispatch(fetchDataForSearch(inputMovie));
  };
  // show movies on page render
  const mapMoviesHandler = () => {
    if (state.loading === true) {
      return <h4>Loading</h4>;
    }
    return state.movies.map((movie) => (
      <Movies
        title={movie.title}
        rating={movie.vote_average}
        image={IMGPATH + movie.poster_path}
        key={movie.id}
      />
    ));
  };
  return (
    <div>
      <div className="header">
        <SortMovies
          sortName={sortByNameHandler}
          sortRating={sortByRatingHandler}
        />
        <SearchInput change={getInputValue} click={submitBtnHandler} />
      </div>
      <div className="App">{mapMoviesHandler()}</div>
    </div>
  );
};

export default App;
