import React from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import MovieTrailer from '../MovieTrailer/MovieTrailer';
import { getMovieDetails, getMovieTrailer } from '../../apiCalls';
import { filterMovieDetails, filterVideo } from '../../utilities';
import Error from '../Error/Error';
import './Details.css';
import arrow from  '../../back-arrow.png';
import dayjs from 'dayjs';


class Details extends React.Component {
    constructor(){
        super()
        this.state = {
            errorMessage: '',
            movie: {},
            movieKey: '',
        };
    }

    componentDidMount() {

        getMovieDetails(this.props.id)
            .then(data => {
                const movieDetails = filterMovieDetails(data)
                this.setState({movie: movieDetails})
            })
            .catch(err => {
                this.setState({errorMessage: 'Something went wrong, please try again later 😔'})
            });
        
        getMovieTrailer(this.props.id)
            .then(data => {
                const trailer = filterVideo(data)
                this.setState({movieKey: trailer})
            })
            .catch(err => {
                this.setState({errorMessage: 'Something went wrong, please try again later 😔'})
            });
    }

    updateGenres(genres){
        if(genres) {
            return genres.join(' | ')
        }
        return ''
    }

    render() {

        let movie = this.state.movie
        let date = dayjs(movie.release_date).format('MM/DD/YYYY');

            const backgroundStyle = {
                overflow: 'hidden',
                backgroundImage:
                `linear-gradient(to right, #1C1D1E, 60%, transparent),
                 url(${movie.backdrop_path})`,
                 backgroundSize: 'cover'
            }



         let details = 
            <section className='details-content'>
                <div className='details-styling'>
                    <section className='details'>
                        <h2 className='details-title'>{movie.title}</h2>
                        <p className='tagline'>{movie.tagline}</p>
                        <section className='minor-details'>
                            <p>{parseFloat(movie.average_rating).toFixed(1)} ⭐️</p>
                            <p>{this.updateGenres(movie.genres)}</p>
                            <p>Release Date: {date}</p>     
                            <p>{movie.runtime} minutes</p>
                        </section>
                        <h3 className='description'>Description</h3>
                        <p className='overview'>{movie.overview}</p>
                    </section>
                    <section className='movie-trailer'>
                         <MovieTrailer movieKey={this.state.movieKey} /> 
                    </section>
                </div>
            </section>

        return (
            <section 
                className='details-wrap'
                id={movie.id}
                style={backgroundStyle}
            >
                <Link to='/'>
                <button className='go-back-btn'><img src={arrow} alt='Go Home' /></button>
                </Link>
                {(!Object.keys(movie).length && !this.state.movieKey.length && !this.state.errorMessage)
                 && <Loading />}
                {this.state.errorMessage ? <Error /> : details}
            </section>
        )
    }
} 
export default Details