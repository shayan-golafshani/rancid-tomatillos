import React from 'react'
import './Details.css'

const Details = ({selectedMovie}) => {
    
    const {
        id,
        backdrop_path,
        overview,
        release_date,
        average_rating,
        genres,
        budget,
        revenue,
        runtime,
        tagline,
        title,
        } = selectedMovie;

    return (
        <div 
            className='details-card'
            id={id}
        >
            <h2>{title}</h2>
            <img src={backdrop_path} alt={`${title} backdrop image`}/>
            <p>{overview}</p>
            <p>{release_date}</p>     
            <p>{average_rating}</p>
            <p>{genres}</p>
            <p>{budget}</p>
            <p>{revenue}</p>
            <p>{runtime}</p>
            <p>{tagline}</p>
        </div>
    )
}

export default Details