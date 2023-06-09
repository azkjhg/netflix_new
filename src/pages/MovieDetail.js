import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'
import { MovieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import DetailMovieCard from '../components/DetailMovieCard'
import Reviews from '../components/Reviews'
import Recommend from '../components/Recommend'
import ButtonToggle from '../components/ButtonToggle'
import { useState } from 'react'


const MovieDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {MoviesById, detailLoading,MovieReview, MovieRecommend, MoviePreview } = useSelector(state=>state.movieById)
  const [toggle, setToggle] = useState("reviews");

  useEffect ( ()=>{
    dispatch(MovieAction.getMoviesById(id))
},[id, dispatch])




if(detailLoading){
  return (<ClipLoader
  color="black"
  loading={detailLoading}
  size={150}
/>)}
else{
  return (
    <div className='movieDetailMain'>
      <DetailMovieCard MovieData={MoviesById && MoviesById} MoviePreview={MoviePreview}/>
      
      <div className='movieDetail_bottom'>
        <ButtonToggle toggle={toggle} setToggle={setToggle}/>
        <Reviews toggle={toggle} ReviewData={MovieReview &&MovieReview} />
        <Recommend toggle={toggle} setToggle={setToggle} RecommendData={MovieRecommend &&MovieRecommend}/>
      </div>
    </div>
  )
  }


}

export default MovieDetail

