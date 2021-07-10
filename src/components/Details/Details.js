import React from 'react'
import './Details.css'

class Details extends React.Component {
    constructor(){
        super()

        this.state = {
            errorMessage: '',
            movie: {},
            movieTrailerUrl: {},
        };
    }

    componentDidMount() {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovie.id}`)
        .then(response => response.json())
        .then(data => {
            let movie = data.movie
            this.setState({movie})
          })
          .catch(err => {
            console.error(err, 'Error caught in get request for movie details')
            this.setState({errorMessage: 'Something went wrong, please try again later 😔'})
          });
    }

    render() {

        const {
            id,
            backdrop_path,
            overview,
            release_date,
            average_rating,
            genres,
            runtime,
            tagline,
            title,
            } = this.state.movie;

        return (
            <div 
                className='details-card'
                id={id}
            >
                <button onClick={() => this.props.returnHome()}>Go Back</button>
                <h2>{title}</h2>
                <p>{tagline}</p>
                <img src={backdrop_path} alt={`${title} backdrop`}/>
                <h3>Description</h3>
                <p>{overview}</p>
                <p>Release Date: {release_date}</p>     
                <p>{parseFloat(average_rating).toFixed(1)} ⭐️</p>
                <p>Film genre: {genres}</p>
                <p>{runtime} minutes</p>
            </div>
        )
    }
} 
export default Details