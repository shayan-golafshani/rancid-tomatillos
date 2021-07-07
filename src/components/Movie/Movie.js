import { render } from '@testing-library/react'
import React from 'react'

const Movie = ({movies}) => {
 
    let testMovies = movies.map(movie => {
       return (
       <div>
            <h3>{movie.title}</h3>
            <p>{movie.average_rating}</p>
            <img src={movie['poster_path']} alt=''/>
        </div>
        )
    })

     return (
         <>
             {testMovies}
         </>
     )

}

export default Movie;