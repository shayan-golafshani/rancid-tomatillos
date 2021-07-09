import React from 'react'
import './Details.css'

const Details = ({selectedMovie, returnHome}) => {
    
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
            <button onClick={() => returnHome()}>Go Back</button>
            <h2>{title}</h2>
            <p>{tagline}</p>
            <img src={backdrop_path} alt={`${title} backdrop`}/>
            <h3>Description</h3>
            <p>{overview}</p>
            <p>Release Date: {release_date}</p>     
            <p>{average_rating.toFixed(1)} ⭐️</p>
            <p>Film genre: {genres}</p>
            <p>Film budget: ${budget}</p>
            <p>Box Office Revenue : ${revenue}</p> {// Round to millions 
            }
            <p>{runtime} minutes</p>
            
        </div>
    )
}

export default Details