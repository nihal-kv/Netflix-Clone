
import React, { useEffect, useState } from 'react'
import requests from '../requests';
import './Banner.css';
import Spinner from './Spinner'

const baseURL= "https://image.tmdb.org/t/p/original";

const Banner = () => {

  const [movie, setMovie]=useState([]);
  const [isLoading, setIsLoading]=useState(false);

  useEffect(()=>{
    async function fetchRandomMovie(){
      setIsLoading(true);
        const response=await fetch(requests.fetchNetflixOriginals);
        const data=await response.json();

        setMovie(data.results[Math.floor(Math.random()*data.results.length-1)])
        // setMovie(data.results[0]);
        setIsLoading(false);
        
    }

    fetchRandomMovie();
  }, [])

  function truncate(str, n){
    return str?.length>n? str.substr(0, n-1)+"...":str;
  }
  return (
    <header className='banner' style={{backgroundSize: "100% 100%", backgroundImage: `url("${baseURL}${movie?.backdrop_path}")`, backgroundPosition: "center center"}}>
        {!isLoading && <div className='banner__contents'>
            <h1 className='banner__title'>{movie.name || movie.title|| movie.original_name}</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>MyList</button>
            </div>
            <h1 className='banner__description'>{truncate(movie.overview, 180)}</h1>
        </div>}
        {isLoading && <Spinner/>}
      
    </header>
  )
}

export default Banner;
