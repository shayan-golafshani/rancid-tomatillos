import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({id, title, rating, imageSrc, displayMovie}) => {

    return (
        <Link to={`/movie/${id}`}>
            <div className='movie-card' onClick={() => displayMovie(id)}>
                <img src={imageSrc} alt={`${title} movie poster`}/>
                <div className='title-rating'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-rating'>{rating.toFixed(1)} ⭐️</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard