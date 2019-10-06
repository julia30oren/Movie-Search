import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Route from 'react-router-dom/Route';
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import Loader from 'react-loader-spinner';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
            currentMovie: null,
            loading: true
        }
        this.apiKey = '80231796f33ff699249bbd0aa04d8183'
    }
    //key=80231796f33ff699249bbd0aa04d8183
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKe}&query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ movies : [...data.results] })
        })
        .catch(err=>{console.log(err)})
    }
    handleChange = (e) => {
        this.setState ({ searchTerm: e.target.value , loading: false});
    }
    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id == id)
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        this.setState({ currentMovie: newCurrentMovie})
    }
    closeMovieInfo = () => {
        this.setState({ currentMovie: null})
    }

    render() {

        return(
                <div className = "App" >
                    < Nav params={this.props.params}/>
                    { this.state.currentMovie == null ? <div>< SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>< MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}
                    
                    {/* < Loader type="ThreeDots" color="#somecolor" height={80} width={80} /> */}
                </div>
        );
    }
}

export default App;