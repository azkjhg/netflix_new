import React from 'react'
import { Badge, Button } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/300.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#b1f1d1',
    },
  },
});
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
        <div className='movieDetail_genre'>{MovieData?.genres.map((item)=><div className='movieDetail_genre_badge' key={item.id}>
                {item.name}
                </div>)}</div>
          
          <div className='movieDetail_title'>{MovieData?.title}</div>
          <div className='movieDetail_tagline'>{MovieData?.tagline
}</div>
          
          <div className='movieDetail_detailScores'>
            <div>
              <span className='movieDetail_users'>
                <i className="fa-solid fa-users" ></i>
              </span>
              {MovieData?.popularity}
            </div>
            <div>
            <span className='movieDetail_average'><i className="fa-solid fa-star"></i></span>
            {MovieData?.vote_average.toFixed(1)} <span className="movieDetail_average_10">/ 10</span>
            </div>
          </div>
         

          <div className='movieDetail_overview'>{MovieData?.overview}</div>
          <div className='movieDetail_detailText'>
            <div className='movieDetail_badge_container'><div className='movieDetail_badge'>Budget</div>${MovieData?.budget}</div>
            <div className='movieDetail_badge_container'><div className='movieDetail_badge'>revenue</div>${MovieData?.revenue}</div>
            <div className='movieDetail_badge_container'><div className='movieDetail_badge'>release</div> {MovieData?.release_date}</div>
            <div className='movieDetail_badge_container'><div className='movieDetail_badge'>runtime</div>{MovieData?.runtime}</div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default DetailMovieCard