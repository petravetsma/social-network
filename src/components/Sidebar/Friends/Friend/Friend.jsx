import React from "react";
import s from './Friend.module.css';
import friend_icon from './../../../../assets/images/user.png';

const Friend = (props) => {
  return (
    <div className={s.friendBlock}>
      <div className={s.iconWrap}>
        <img className={s.iconImg}
             src={friend_icon}
             alt="person icon"/>
      </div>
      <p className={s.friendText}>{props.name}</p>
    </div>
  );
}

export default Friend;
