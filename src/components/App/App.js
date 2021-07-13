import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Details from '../Details/Details';
import Loading from '../Loading/Loading';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      errorMessage: '',
      loadingMessage:'',
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies`)
      .then(response => response.json())
      .then(data => {
        let movies = data.movies
        this.setState({movies})
      })
      .catch(err => {
        console.error(err, 'Error caught in get all movies request')

        this.setState({errorMessage: 'Our site is down please try again later 😔'})
      });
  }

   displayMovie = (id) => {
    let selectedMovie = this.state.movies.find(movie => id === movie.id)
    this.setState({selectedMovie});
  }
 
  render() {
    return (
      
        <React.Fragment>
          <nav>
            <h1>Rancid Tomatillos</h1>
          </nav>
          {(!this.state.movies.length && !this.state.errorMessage) && <Loading /> }
          {this.state.errorMessage && <h2 className='error-message'> {this.state.errorMessage} </h2>}
        
            <Route exact path='/'>
              <Movies  movies={this.state.movies} displayMovie={this.displayMovie}/> 
            </Route>
            <Route path='/:id' render={({match}) => {
              const selectedMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
              return <Details {...selectedMovie}/>

            }} />

        </React.Fragment>
  
    )
   }
}

export default App;
