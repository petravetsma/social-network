import React from "react";
import Friend from "./Friend/Friend";
import style from './Friends.module.css';

const Friends = (props) => {
  const friendElements = props.friends.map(friend => <Friend key={friend.id} name={friend.name}/>);
  return (
    <div>
      <h3 className={style.friendsHeader}>Friends</h3>
      <div className={style.friendsWrap}>
        {friendElements}
      </div>
    </div>
  );
}

export default Friends;
