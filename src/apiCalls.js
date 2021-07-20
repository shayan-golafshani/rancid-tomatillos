const getAllMovies = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
        .then(response => response.json())
        .catch(err => console.error(err))
}

const getMovieDetails = (id) => {
    return fetch (`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .catch(err => console.error(err))
}

const getMovieTrailer = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`) 
        .then(response => response.json())
        .catch(err => console.error(err))
}

const getAllMovieDetails =(id) => Promise.all([getMovieDetails(id), getMovieTrailer(id)])


export { getAllMovies, getAllMovieDetails}