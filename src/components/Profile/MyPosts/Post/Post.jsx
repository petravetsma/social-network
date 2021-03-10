import React from 'react';

const Post = (props) => {
  return (
    <div>
      <img src='https://i.pinimg.com/236x/26/a9/6f/26a96fa8b0d12030b3a4453963f90e28.jpg' alt='user' />
      <p>{props.text}</p>
      likes: {props.likes}
    </div>
  );
}

export default Post;
