import React from 'react'

const Reviews = ({ReviewData}) => {
  return (
    <div className='review_mainContainer'>
        <div className='review_title'>Reviews</div>
        
    <div>
        {ReviewData?.results.map((item)=>
            <div className='review_item' key={item.id}>
                <div>{item.author}</div>
                <div>{item.content}</div>
            </div>)}
    </div>

    {/* <div>{ReviewData.page}</div> */}
        
        
     
    </div>
  )
}

export default Reviews