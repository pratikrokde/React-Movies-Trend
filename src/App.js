import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, sortByName, sortByRating } from "./actions";
import "./App.css";
import Movies from "./Movies";
import SearchInput from "./SearchInput";
import SortMovies from "./SortMovies";

const MOVIEAPI =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // const [search, setSearch] = useState("");
  // const [queries, setQuery] = useState([search]);

  const [empty, setEmpty] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const sortByRatingHandler = () => {
    dispatch(sortByRating());
  };

  const sortByNameHandler = () => {
    dispatch(sortByName());
  };

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
        <SearchInput
        //  change={getInputValue} click={submitBtnHandler}
        />
      </div>
      <div className="App">
        {mapMoviesHandler()}

        {/* {queries.map((query) => (
          <Movies
            title={query.title}
            rating={query.vote_average}
            image={IMGPATH + query.poster_path}
            key={query.id}
          />
        ))} */}
      </div>
    </div>
  );
};

export default App;
