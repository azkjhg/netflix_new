import React from 'react'
import MovieCard from './MovieCard'

const Recommend = ({toggle, setToggle, RecommendData}) => {
  return (
    <div className={toggle === "Recommend" ? "Recommend_mainContainer" : "Recommend_mainContainer unActive"} >

      {RecommendData && RecommendData.results.map((item, index)=>
           <MovieCard setToggle={setToggle} key={index} eachArray={item}/>)}
    </div>
  )
}

export default Recommend