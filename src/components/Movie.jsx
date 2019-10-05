import React from 'react';

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card" style={{height:'450px'}}>
                <div className="card-image waves-block waves-light">
                    <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="..." style={{height:'400px'}}/>
                </div>
                <div className="card-container">
                    <p><a className="more-det-link" href="#" onClick={ ()=>{ props.viewMovieInfo(props.movieId)}}>More Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;