import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = ({movies, displayMovie}) => {

    let testMovies = movies.map(movie => {
       return (
            <MovieCard
                title={movie.title}
                rating={movie.average_rating}
                imageSrc={movie.poster_path}
                id={movie.id}
                key={movie.id}
                displayMovie={displayMovie}
            />
        )
    })

     return (
         <section className='movie-container'>
             {testMovies}
         </section>
     )

}
export default Movies;