import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import Details from '../Details/Details';
import movieData from '../../movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie: {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }
    }
    this.displayMovie = this.displayMovie.bind(this);
  }

   displayMovie(id) {
    let selectedMovie = this.state.movies.filter(movie => id === movie.id)
    this.setState({selectedMovie});
  }
 
  render() {
    return (
      <React.Fragment>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        {/* {Object.keys(this.state.selectedMovie).length && */}
          <Details 
            selectedMovie={this.state.selectedMovie}
          />
        {/* } */}
        {/* <Movies 
          movies={this.state.movies} 
          displayMovie={this.displayMovie}
        /> */}
      </React.Fragment>
    );
  }
}

export default App;
