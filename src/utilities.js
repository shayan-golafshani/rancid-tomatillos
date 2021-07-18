const filterMovieDetails = (movieDetails) => {
    const {
        id,
        title,
        tagline,
        average_rating,
        genres,
        release_date,
        runtime,
        overview,
        backdrop_path
        } = movieDetails.movie;
    
    const filteredDetails = {
        'id': id,
        'title': title,
        'tagline': tagline,
        'ratimg': average_rating,
        'genres': genres,
        'release_date': release_date,
        'runtime': runtime,
        'overview': overview,
        'backdrop_path':backdrop_path,
    }
    return filteredDetails
}

const filterVideo = (movieTrailers) => {
    const singleVideo = movieTrailers.videos[0].key
    return singleVideo
}

export { filterMovieDetails, filterVideo }