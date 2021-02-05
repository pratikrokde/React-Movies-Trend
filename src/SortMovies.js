import React from 'react';


const SortMovies = (props) =>{
    return(
        <div className="sort-items">
            <p onClick={props.sortName}> Sort By name </p>/
            <p onClick={props.sortRating}> Sort By Rating</p>
        </div>
    );
}

export default SortMovies;