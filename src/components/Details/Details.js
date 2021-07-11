import React from 'react'
import MovieTrailer from '../MovieTrailer/MovieTrailer';
import './Details.css'

class Details extends React.Component {
    constructor(){
        super()

        this.state = {
            errorMessage: '',
            movie: {},
            movieTrailers: [],
        };
    }

    componentDidMount() {

        let getMovie = (endpoint) => {
           let fetchData =  
           endpoint ?
           fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovie.id}/${endpoint}`) 
           : fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovie.id}`);

        return fetchData
                .then(response => response.json())
                .then(data => {
                if(data.movie) {
                let movie = data.movie
                this.setState({movie})
                } else if(data.videos.length) {
                    this.setState({movieTrailers: data.videos})
                }
            })
            .catch(err => {
                console.error(err, 'Error caught in get request for movie details')
                this.setState({errorMessage: 'Something went wrong, please try again later 😔'})
            });
            }

          Promise.all([getMovie(), getMovie('videos')])
          .then(promise => console.log(promise));
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

            const backgroundStyle = {
                overflow: 'hidden',
                // objectFit: 'contain',
                backgroundImage:
                `linear-gradient(to right, #1C1D1E, 60%, transparent),
                 url(${this.state.movie.backdrop_path})`,
                 backgroundSize: 'cover'
            }

        return (
            <section 
                className='details-wrap'
                id={id}
                style={backgroundStyle}
            >
                <button className='go-back-btn' onClick={() => this.props.returnHome()}>Go Back</button>
                <section className='details-content'>
                    <section className='details'>
                        <h2 className='details-title'>{title}</h2>
                        <p>{tagline}</p>
                        <h3 className='description'>Description</h3>
                        <p>{overview}</p>
                        <section className='minor-details'>
                            <p>{parseFloat(average_rating).toFixed(1)} ⭐️</p>
                            <p>Film genre: {genres}</p>
                            <p>Release Date: {release_date}</p>     
                            <p>{runtime} minutes</p>
                        </section>
                    </section>
                    <section className='movie-trailer'>
                        {
                            this.state.movieTrailers.length  && 
                            <MovieTrailer
                            movieKey={this.state.movieTrailers[0].key} />
                        }
                    </section>
                </section>
            </section>
        )
    }
} 
export default Details