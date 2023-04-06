import React, {useEffect, useState, useRef} from 'react'
import { MovieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";


const Movies = () => {
    const dispatch = useDispatch()

    const {
    popularMovies,
topRateMovies,
upComingMovies, loading} = useSelector(state=>state.movie)

useEffect(() => {
  dispatch(MovieAction.getMovies());
},[]);

console.log(popularMovies, "파퓰러 무비")
if(loading){
  return (<ClipLoader
  color="black"
  loading={loading}
  size={150}
/>)
}
  return (
    <div className='HomeBody'>
    <div className='h1Tittle'>Top Popular Movies</div>
    <MovieSlide  eachMovies={popularMovies && popularMovies}/>
    
    </div>

  )

}

export default Movies