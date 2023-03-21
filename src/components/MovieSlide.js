import React from 'react'
import MovieCard from './MovieCard';
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };


const MovieSlide = ({eachMovies}) => {
  return (
    <div className='slideList'>
      {eachMovies && eachMovies.results?.map(
        (item, index)=>
           <MovieCard  key={index} eachArray={item}/> 
         )}

      {/* <div>
    {eachMovies && <Carousel responsive={responsive}>
      {eachMovies && eachMovies.results?.map(
                 (item, index)=>
                   <MovieCard  key={index} eachArray={item}/> 
                 )}
         </Carousel>}
       </div> */}

    </div>

  )
}

export default MovieSlide