import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <img src='https://i.pinimg.com/236x/26/a9/6f/26a96fa8b0d12030b3a4453963f90e28.jpg' />
      <p>{props.text}</p>
      likes: {props.likes}
    </div>
  );
}

export default Post;
