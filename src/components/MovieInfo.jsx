import React from 'react';

const MovieInfo = (props) => {
    return (
        <div>
            
        <div className="container" style={{marginTop:'30px'}}>
            <div className="card mb-3">
                <div className="row no-gutters">
                <div className="card-image waves-block waves-light col-md-4">
                    <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-content card-body">
                    <p className="desc">{props.currentMovie.original_title}</p><br/>
                    <p>Language: {props.currentMovie.original_language}</p>
                    <p>Released: {props.currentMovie.release_date}</p>
                    <p>Rating: {props.currentMovie.vote_average}</p><br/>
                    <p className="desc">{props.currentMovie.overview}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        
            <div className="container go-back-div" onClick={props.closeMovieInfo}>
                <i className="fas fa-long-arrow-alt-left fa-2x"></i>
                <a className="more-det-link go-back" href="#">Go Back</a>
            </div>

        </div>
    )
}
export default MovieInfo;