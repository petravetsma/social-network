import React from "react";
import style from './Friend.module.css';
import friend_icon from './../../../../assets/images/user.png';

const Friend = (props) => {
  return (
    <div className={style.friendBlock}>
      <div className={style.iconWrap}>
        <img className={style.iconImg}
             src={friend_icon}
             alt="person icon"/>
      </div>
      <p className={style.friendText}>{props.name}</p>
    </div>
  );
}

export default Friend;
