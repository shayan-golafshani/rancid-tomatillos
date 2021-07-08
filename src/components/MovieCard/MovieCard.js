import React from 'react'
import './MovieCard.css'

const MovieCard = ({title, rating, imageSrc}) => {

    let newRating = rating.toFixed(1)
    return (
        <div className='movie-card'>
            <h3>{title}</h3>
            <p>{newRating} ⭐️</p>
            <img src={imageSrc} alt={`${title} movie poster`}/>
        </div>
    )
}

export default MovieCard