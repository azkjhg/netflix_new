import React from 'react'


const Banner = ({movie}) => {
const avatar ={"adult":false,"backdrop_path":"/ovM06PdF3M8wvKb06i4sjW3xoww.jpg","belongs_to_collection":{"id":87096,"name":"아바타 시리즈","poster_path":"/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg","backdrop_path":"/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg"},"budget":460000000,"genres":[{"id":878,"name":"SF"},{"id":12,"name":"모험"},{"id":28,"name":"액션"}],"homepage":"","id":76600,"imdb_id":"tt1630029","original_language":"en","original_title":"Avatar: The Way of Water","overview":"판도라 행성에서 제이크 설리와 네이티리가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다. 살아남기 위해 설리 가족이 숲에서 바다로 터전을 옮기면서 겪게 되는 화합의 과정, 그리고 곳곳에서 도사리는 새로운 위협까지 역경 속에서 더 아름답게 펼쳐진다.","popularity":1274.055,"poster_path":"/z56bVX93oRG6uDeMACR7cXCnAbh.jpg","production_companies":[{"id":127928,"logo_path":"/cxMxGzAgMMBhTXkcpYYCxWCOY90.png","name":"20th Century Studios","origin_country":"US"},{"id":574,"logo_path":"/iB6GjNVHs5hOqcEYt2rcjBqIjki.png","name":"Lightstorm Entertainment","origin_country":"US"}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2022-12-14","revenue":2281000000,"runtime":192,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","tagline":"판도라의 바다, 새로운 세계가 펼쳐진다","title":"아바타: 물의 길","video":false,"vote_average":7.731,"vote_count":5703}

  const style = {
    backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${avatar.poster_path})`
  }
    return (
    <div className='banner' style={style}>
      <div className='banner-info'>
        <h1>{avatar.title}</h1>
        <p>{avatar.overview}</p>
      </div>

    </div>
  )
}

export default Banner