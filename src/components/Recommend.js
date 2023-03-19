import React from 'react'
import MovieCard from './MovieCard'

const Recommend = ({toggle, RecommendData}) => {
  return (
    <div className={toggle === "Recommend" ? "Recommend_mainContainer" : "Recommend_mainContainer unActive"} >

      {RecommendData && RecommendData.results.map((item, index)=>
           <MovieCard key={index} eachArray={item}/>)}
    </div>
  )
}

export default Recommend