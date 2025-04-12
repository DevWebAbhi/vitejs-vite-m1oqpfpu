import React from 'react'

const Likebutton = ({isLiked,handleLike,id}) => {
  return (
    <button onClick={
        ()=>handleLike(id)
    } style={{backgroundColor:isLiked?"red":'white',border:"1px solid"}}>{isLiked?"Liked":"Not Liked"}</button>
  )
}

export default Likebutton