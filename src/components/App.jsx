import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from 'react-router-dom/Route';
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import FadeLoader from 'react-spinners/FadeLoader';
import SomeText from './SomeText'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
            currentMovie: null,
        }
        this.apiKey = '80231796f33ff699249bbd0aa04d8183'
    }
    //key=80231796f33ff699249bbd0aa04d8183
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ movies : [...data.results] })
        })
        .catch(err=>{console.log(err)})
    }
    handleChange = (e) => {
        this.setState ({ searchTerm: e.target.value});
    }
    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id === id)
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        this.setState({ currentMovie: newCurrentMovie})
    }
    closeMovieInfo = () => {
        this.setState({ currentMovie: null})
    }

    render() {

        return(
            <Router>
                <div className = "App" >
                    < Nav params={this.props.params}/>
                    <div className='container nav-search'>
                    <ul>
                        <li className="nav-item">
                        <NavLink to="/home" exect activeStyle={{color:'blue'}}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/search" exect activeStyle={{color:'blue'}}>Search Movies</NavLink>
                        </li>
                    </ul>
                    </div>
                    <Route path='/home' exect strict render={
                         () => {
                      return (<SomeText/>);
                     }
                    }/>
                    <Route path='/search' exect strict render={
                         () => {
                      return (
                        <div>{ this.state.currentMovie == null ? <div>< SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>< MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}
                             { this.state.movies.length == 0 ? <div className='container'>< FadeLoader sizeUnit={"px"} size={150} color={'#123abc'}/></div> : ''}
                        </div>
                        );
                      }
                    }/>

                </div>
            </Router>
        );
    }
}

export default App;