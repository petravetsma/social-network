import React from "react";
import s from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={s.friendBlock}>
      <div className={s.iconWrap}>
        <img className={s.iconImg}
             src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
             alt="person icon"/>
      </div>
      <p className={s.friendText}>{props.name}</p>
    </div>
  );
}

export default Friend;
