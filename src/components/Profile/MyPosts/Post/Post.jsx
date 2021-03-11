import React from 'react';
import profile_user from './../../../../assets/images/profile_user.jpg';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.postImg} src={profile_user} alt='user' />
      <p>{props.text}</p>
      likes: {props.likes}
    </div>
  );
}

export default Post;
