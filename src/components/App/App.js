import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../../movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }
 
  render() {
    return (
      <React.Fragment>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        <Movies movies={this.state.movies}/>
      </React.Fragment>
    );
  }
}

export default App;
