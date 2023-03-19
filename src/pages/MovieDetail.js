import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'
import { MovieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import DetailMovieCard from '../components/DetailMovieCard'
import Reviews from '../components/Reviews'
import Recommend from '../components/Recommend'



const MovieDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {MoviesById, detailLoading,MovieReview, MovieRecommend } = useSelector(state=>state.movieById)
  console.log("이게 머냐", useSelector(state=>state.movieById))


  useEffect ( ()=>{
    dispatch(MovieAction.getMoviesById(id))
},[id])

  

console.log("로딩",detailLoading)
if(detailLoading){
  return (<ClipLoader
  color="black"
  loading={detailLoading}
  size={150}
/>)}
else{
  return (


    <div className='movieDetailMain'>
    <DetailMovieCard  MovieData={MoviesById && MoviesById}/>
    <Reviews ReviewData={MovieReview &&MovieReview} />
    <Recommend RecommendData={MovieRecommend &&MovieRecommend}/>
    
    </div>
  )
  }


}

export default MovieDetail