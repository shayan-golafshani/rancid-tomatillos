import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../../movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie:[]
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
        <Movies 
          movies={this.state.movies} 
          displayMovie={this.displayMovie}
        />
      </React.Fragment>
    );
  }
}

export default App;
