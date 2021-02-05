import React,{useEffect, useState} from 'react';
import './App.css';
import Movies from './Movies';
import SearchInput from './SearchInput';
import SortMovies from './SortMovies';

const MOVIEAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [queries, setQuery] = useState([search]);

    const [empty, setEmpty] = useState([]);

    useEffect(() =>{
      getDataFromAPI();
    },[]);

    //DATA FROM API
    const getDataFromAPI =async () =>{
      const response = await fetch(MOVIEAPI);
      const data =await response.json();
      // console.log(data.results);
      setMovies(data.results);
    }
    //USER INPUT -- MOVIE NAME
    const getInputValue = (e) => {
      setSearch(e.target.value);
      // console.log(search);
    }
    //SUBMIT BTN CLICK AND GET NEW MOVIES DATA
    const submitBtnHandler =async (e) => {
      e.preventDefault();
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`);
      const searchData = await res.json();
      // console.log(searchData.results);
      setMovies(empty);
      setQuery(searchData.results);
      
    }

    const sortByNameHandler = () =>{
      // console.log(movies);
      const newMovies =  movies.slice();
      newMovies.sort( function(a,b) {
        if(a.title > b.title){
          return 1;
        }else{
          return -1;
        }
      })
      setMovies(newMovies);
    }

    const sortByRatingHandler = () =>{
      const newMovies =  movies.slice();
      newMovies.sort( function(a,b) {
       return b.vote_average - a.vote_average;
      })
      setMovies(newMovies);
    }

    return (
      <div  >
        <div className="header">
          <SortMovies sortName={sortByNameHandler} sortRating={sortByRatingHandler}/>
          <SearchInput change={getInputValue} click={submitBtnHandler} />
        </div>
        <div className="App">
          {movies.map( (movie) => (
            <Movies title={movie.title}
                    rating={movie.vote_average}
                    image={IMGPATH + movie.poster_path}
                    key={movie.id}/> 
          ))}

          {queries.map( query => (
             <Movies title={query.title}
             rating={query.vote_average}
             image={IMGPATH + query.poster_path}
             key={query.id}/> 
          ))}
        </div>
      </div>
    );
  
}

export default App;
