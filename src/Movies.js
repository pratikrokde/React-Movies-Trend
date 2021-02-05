import React from 'react';


const Movies = (props) =>{
    return(
        <div>
             <div className="card">
                <img src={props.image} alt={props.title} />
                <div className="info">
                    <h3 className="movie-title">{props.title}</h3>
                    <span className="rating">{props.rating}</span>
                </div>
            </div>
        </div>
    );
}

export default Movies;