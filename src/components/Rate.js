import React from 'react'
import { useState } from 'react'
import './rate.css'
function Rate({video}) {

 const comment = video.comments.map((comment)=>{
  return(
   <div key={comment.id}>
    <h2>{comment.user}</h2>
    <h3>{comment.comment}</h3>
   </div>
  )
 })

 const [count, setCount] = useState(9210)

 const addCount = () =>{
  setCount(count ++)
 }


  return (
    <div className='rate-card'>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
     <h1>{video.title}</h1>
     <h2>{video.views} views | <span>Uploaded {video.createdAt}</span></h2>

     <button onClick={addCount}>
      {count}
      👍
     </button>
     <button onClick={addCount}>
      {count}
      👎
     </button>
     <p>{comment}</p>
    </div>

  )
}

export default Rate