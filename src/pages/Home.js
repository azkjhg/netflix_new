import React, {useEffect, useState, useRef} from 'react'
import { MovieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
    const dispatch = useDispatch()

    const {
    popularMovies,
topRateMovies,
upComingMovies, loading} = useSelector(state=>state.movie)

useEffect(() => {
  dispatch(MovieAction.getMovies());
},[]);

useEffect(() => {
    const options = {
      rootMargin: '-45% 0px -45% 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Target is visible!');
          console.log(entry)
          entry.target.className ='overlay show'
          // targetRef.current.className = "overlay show"
          console.log("클래스 바꾸는 일 했냐")       
        }
        else if (!entry.isIntersecting){
          console.log('Target is invisible!');
          entry.target.className ='overlay'
        }
      });
    },options);

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Target is visible!');
          console.log(entry)
          entry.target.className ='MovieCard show'
          // targetRef.current.className = "overlay show"
          console.log("클래스 바꾸는 일 했냐")       
        }
        else if (!entry.isIntersecting){
          console.log('Target is invisible!');
          entry.target.className ='MovieCard'
        }
      });
    },options);

    const targetTag = document.querySelectorAll('.overlay')

    const targetTag2 = document.querySelectorAll('.MovieCard')
   
    for(let i=0; i<targetTag.length; i++){
      observer.observe(targetTag[i]);
    }

       
    for(let i=0; i<targetTag2.length; i++){
      observer2.observe(targetTag2[i]);
    }

    console.log(targetTag)
    console.log("관찰자 지정 일 했냐")

    // cleanup 함수
    return () => {
      console.log('언마운트');
      observer.disconnect();
      observer2.disconnect();
    };
  
});


if(loading){
  return (<ClipLoader
  color="black"
  loading={loading}
  size={150}
/>)
}
  return (
    <div className='HomeBody'>

      <Banner movie={popularMovies && popularMovies.results[0]}/>
    <div className='h1Tittle'>Top Popular Movies</div>
  
    <MovieSlide  eachMovies={popularMovies && popularMovies}/>
    <div className='h1Tittle'>Top Rated Movies</div>
    <MovieSlide eachMovies={topRateMovies && topRateMovies}/>
    <div className='h1Tittle'>Upcoming Movies</div>
    <MovieSlide eachMovies={upComingMovies && upComingMovies}/>
    </div>

  )

}

export default Home