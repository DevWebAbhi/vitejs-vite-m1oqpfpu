import React from 'react'
import Likebutton from './likebutton'

const Postcard = ({user,handleLike}) => {
  return (
    <div style={{border:"1px solid",borderRadius:"6px",marginTop:"10px"}}>
        <img style={{width:"200px",height:"230px"}} src={user.profileImage} alt="img" />
        <h3>{user.username}</h3>
        <Likebutton isLiked={user.isLiked} id={user.id} handleLike={handleLike}/>
    </div>
  )
}

export default Postcard