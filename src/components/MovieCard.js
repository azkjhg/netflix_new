import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({eachArray}) => {
    const eachUrl = eachArray.backdrop_path
  const style = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${eachUrl})`
  }

    const {genreList} = useSelector(state => state.movie)

    let bgColor;
    if(eachArray.vote_average >= 9){
      bgColor = "primary"
    }
    else if (eachArray.vote_average >= 6){
      bgColor = "success"
    }
    else if (eachArray.vote_average >= 3){
      bgColor = "warning"
    }
    else {
      bgColor = "danger"
    }

    const navigate = useNavigate()  
    const showDetail =() => {
        navigate(`/movies/${eachArray.id}`)
      }
    console.log(eachArray)
    return (
    <div className='MovieCard' style={style} onClick={showDetail}>
      <div className='cardWrapBox'>
        <div className='overlay'>
          <div>
          <h1 className='movieTitle'>{eachArray.title}</h1>
            <div>{eachArray.genre_ids.map(id=>
                <Badge key={id} bg="danger" className='genreBadge'>
                {genreList.genres.find( item => item.id === id).name}
              </Badge>
              )}
            </div>
            <div>
              <Badge bg={bgColor}>평점: {eachArray.vote_average}</Badge>
              <span>{eachArray.adult ? "청불" : " " }</span>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default MovieCard