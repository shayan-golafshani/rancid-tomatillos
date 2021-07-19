const getAllMovies = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
        .then(response => response.json())
}

const getMovieDetails = (id) => {
    return fetch (`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
}

const getMovieTrailer = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`) 
        .then(response => response.json())
}

const getAllMovieDetails =(id) => {
    return Promise.all([getMovieDetails(id), getMovieTrailer(id)])
        //  .then(response => {
        //     console.log(response) 
        //     return response.json()})
}


export { getAllMovies, getAllMovieDetails}