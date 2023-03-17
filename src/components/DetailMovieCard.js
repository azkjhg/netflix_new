import React from 'react'
import { Badge } from 'react-bootstrap'


const DetailMovieCard = ({MovieData}) => {

    const imgUrl = `https://image.tmdb.org/t/p/original//${MovieData && MovieData.poster_path}`
    console.log(MovieData)
  return (
    <div className="movieDetailCard">

<div className='movieDetail_mainContainer'>
        <div >
          <img src={imgUrl} alt={"영화 포스터"} className='movieDetail_img' />
        </div>
        <div className='movieDetail_textContainer'>
        <div className='movieDetail_genre'>{MovieData?.genres.map((item)=><Badge key={item.id} pill bg="danger" className='genreBadge'>
                {item.name}
              </Badge>)}</div>
          
          <div className='movieDetail_title'>{MovieData?.title}</div>
          
          
          
          <div>{MovieData?.popularity}</div>
          <div className='movieDetail_overview'>{MovieData?.overview}</div>
          <div>평점 {MovieData?.vote_average.toFixed(1)}</div>
          <div>Release Day {MovieData?.release_date}</div>

        </div>
      </div>

    </div>
  )
}

export default DetailMovieCard