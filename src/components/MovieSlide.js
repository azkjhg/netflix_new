import React from 'react'
import MovieCard from './MovieCard';
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieSlide = ({eachMovies}) => {
  return (
    <div className='slideList'>
      {eachMovies && eachMovies.results?.map(
        (item, index)=>
           <MovieCard  key={index} eachArray={item}/> 
         )}
    </div>
  )
}

export default MovieSlide