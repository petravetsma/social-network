import React from 'react';
import style from './Post.module.css';
import userIcon from '../../../../assets/images/user.png'

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.postImg} src={props.smallPhoto || userIcon} alt='user' />
      <p>{props.text}</p>
      likes: {props.likes}
    </div>
  );
}

export default Post;
