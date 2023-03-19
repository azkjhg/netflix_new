import React from 'react'
import MovieCard from './MovieCard'

const Recommend = ({RecommendData}) => {
  return (
    <div className='Recommend_mainContainer'>
        {console.log("레코",RecommendData)}
      {RecommendData && RecommendData.results.map((item, index)=>
           <MovieCard key={index} eachArray={item}/>)}
    </div>
  )
}

export default Recommend