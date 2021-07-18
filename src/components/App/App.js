import Details from '../Details/Details';
import Error from '../Error/Error';
import { getAllMovies } from '../../apiCalls';
import Loading from '../Loading/Loading';
import Movies from '../Movies/Movies';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchBarValue:'',
      filteredMovies: [],
      selectedMovie: {},
      errorMessage: '',
      loadingMessage:'',
    }
  }

  componentDidMount() {

    getAllMovies()
      .then(data => {
        const movies = data.movies;
        this.setState({movies})
      })
      .catch(err => {
        this.setState({errorMessage: 'Our site is down please try again later 😔'})
      })

  }

   displayMovie = (id) => {
    let selectedMovie = this.state.movies.find(movie => id === movie.id)
    this.setState(
      {selectedMovie,
       searchBarValue:'',
       filteredMovies:[],
      }
    );
  }

  filterOnSearch = (e) => {
    
    this.setState({searchBarValue: e.target.value})
    this.setState(prevState => {
    }, () => {
      let filteredMovies = this.state.movies.filter(
        movie => movie.title.toLowerCase().includes(this.state.searchBarValue.toLowerCase()))
      this.setState({filteredMovies})
    })
  }
 
  render() {
    return (
      <main>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
          <Switch>

            <Route path='/:id/:invalidPath'> 
              <Error /> 
            </Route>

            <Route path='/:id' render={({ match }) => {
              const selectedMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
              return !selectedMovie ? <Error /> : <Details {...selectedMovie}/>
            }} />

            <Route exact path='/rancid-tomatillos'>
              {(!this.state.movies.length && !this.state.errorMessage) && <Loading /> }
              {this.state.errorMessage &&  <Error />}

              { this.state.movies.length && 
              <input 
                type="text" 
                placeholder="Search by movie title 🍅" 
                value={this.state.searchBarValue}
                onChange={e => this.filterOnSearch(e)}
              /> 
              }
              <Movies movies={!this.state.filteredMovies.length ?
                this.state.movies : 
                this.state.filteredMovies } 
                displayMovie={this.displayMovie}/> 
            </Route>

            <Route component={Error} />
            
          </Switch>
      </main>
    )
   }
}

export default App;
