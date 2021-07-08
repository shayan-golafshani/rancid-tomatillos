import React from 'react'
import './MovieCard.css'

const MovieCard = ({id, title, rating, imageSrc, displayMovie}) => {

    return (
        <div className='movie-card' onClick={() => displayMovie(id)}>
            <h3>{title}</h3>
            <p>{rating.toFixed(1)} ⭐️</p>
            <img src={imageSrc} alt={`${title} movie poster`}/>
        </div>
    )
}

export default MovieCard