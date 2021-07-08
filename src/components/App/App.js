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
      selectedMovie: {}
    }
  }

   displayMovie = (id) => {
    let selectedMovie = this.state.movies.find(movie => id === movie.id)
    this.setState({selectedMovie});
  }

  returnHome = () => {
    console.log('in return home')
    this.setState({selectedMovie: {}})
  }
 
  render() {
    return (
      <React.Fragment>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        { Object.keys(this.state.selectedMovie).length 
          ? <Details  selectedMovie={this.state.selectedMovie} returnHome={this.returnHome}/>
          : <Movies  movies={this.state.movies} displayMovie={this.displayMovie}/> 
        }
      </React.Fragment>
    )
   }
}

export default App;
