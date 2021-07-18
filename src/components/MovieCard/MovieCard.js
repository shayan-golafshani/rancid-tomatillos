import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import React from 'react'
import './MovieCard.css'

const MovieCard = ({id, title, rating, imageSrc, displayMovie}) => {

    return (
        <Link to={`/${id}`}>
            <article className='movie-card' onClick={() => displayMovie(id)}>
                <img src={imageSrc} alt={`${title} movie poster`}/>
                <div className='title-rating'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-rating'>{rating.toFixed(1)} ⭐️</p>
                </div>
            </article>
        </Link>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    rating: PropTypes.number,
    imageSrc: PropTypes.string,
    displayMovie: PropTypes.func
}

export default MovieCard