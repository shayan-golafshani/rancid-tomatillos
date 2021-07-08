import { render } from '@testing-library/react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'
import React from 'react'

const Movies = ({movies}) => {
 
    let testMovies = movies.map(movie => {
       return (
            <MovieCard
            title={movie.title}
            rating={movie.average_rating}
            imageSrc={movie.poster_path}
            id={movie.id}
            key={movie.id} 
            />
        )
    })

     return (
         <div className='movie-container'>
             {testMovies}
         </div>
     )

}

export default Movies;