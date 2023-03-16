import React from 'react'

const DetailMovieCard = ({MovieData}) => {

    const imgUrl = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${MovieData && MovieData.poster_path}`

  return (
    <div>

<div className='movieDetail_mainContainer'>
        <div>
          <img src={imgUrl} alt={"영화 포스터"} />
        </div>
        <div className='movieDetail_textContainer'>
          <div>영화 제목{MovieData?.title}</div>
          <div>장르</div>
          <div>영화 인기도</div>
          <div>영화 줄거리</div>
          <div>예산</div>
          <div>개봉일</div>
          <div>이페이지는 현재 제작중입니다</div>
        </div>
      </div>

    </div>
  )
}

export default DetailMovieCard