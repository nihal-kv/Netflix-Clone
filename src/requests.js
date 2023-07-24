const API_KEY="4b4b18c2893d66c7803338d8cff1fd82";

const requests={
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&langauge=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&langauge=en-US`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;