import React from 'react';
import profile_user from './../../../../assets/images/profile_user.jpg';

const Post = (props) => {
  return (
    <div>
      <img src={profile_user} alt='user' />
      <p>{props.text}</p>
      likes: {props.likes}
    </div>
  );
}

export default Post;
