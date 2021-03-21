import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.postImg} src={props.smallPhoto} alt='user' />
      <p>{props.text}</p>
      likes: {props.likes}
    </div>
  );
}

export default Post;
