import React from 'react'

const MovieCard = ({title, rating, imageSrc}) => {

    return (
        <div className='movie-card'>
            <h3>{title}</h3>
            <p>{rating}</p>
            <img src={imageSrc} alt={`${title} movie poster`}/>
        </div>
    )
}

export default MovieCard