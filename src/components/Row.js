import React, { useEffect, useState } from 'react'
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Spinner from './Spinner';

const baseURL= "https://image.tmdb.org/t/p/original"

const Row = (props) => {

  const title=props.title;
  const fetchURL= props.fetchURL; 
  const isLargeRow=props.isLargeRow;

  const [movies, setMovies]=useState([]);
  const [trailerUrl, setTrailerUrl]=useState("");
  const [isLoading, setIsLoading]=useState(false);

  useEffect(()=>{
    async function fetchMovies(){
        setIsLoading(true);
        const response= await fetch(fetchURL);
        const data=await response.json();

        setMovies(data.results);
        setIsLoading(false);
    }

    fetchMovies();
  }, [fetchURL])
 
  const opts={
    height: "390px",
    width: "100%",
    playerVars:{
      autoplay:1
    }
  };

  const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }
    else
    {
      movieTrailer(movie?.name || "").then((url)=>{
        const urlParams=new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'));
      }).catch(error=>console.log(error));
    }
  }

  return (
    <div className='row'>
        <h2 className='row__title'>{title}</h2>
        <div className='movies__container'>
            {!isLoading && movies.map((movie)=>{
               return  <img src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.title || movie.name || movie.original_name} key={movie.id} className={`movie__image ${isLargeRow && "movie__largeImage"}`} onClick={()=>handleClick(movie)}/>
            })}
            {isLoading && <Spinner/>}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
