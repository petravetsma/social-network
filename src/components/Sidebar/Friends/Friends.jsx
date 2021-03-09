import React from "react";
import Friend from "./Friend/Friend";
import s from './Friends.module.css';

const Friends = (props) => {
  const friendElements = props.friends.map(friend => <Friend name={friend.name}/>);
  return (
    <div>
      <h3 className={s.friendsHeader}>Friends</h3>
      <div className={s.friendsWrap}>
        {friendElements}
      </div>
    </div>
  );
}

export default Friends;
