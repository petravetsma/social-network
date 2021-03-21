import React from 'react';
import User from "./User/User";
import style from "./Users.module.css";


const Users = (props) => {
  const usersElements = props.users.map(user => {
    return <User key={user.id}
                 user={user}
                 followingInProgress={props.followingInProgress}
                 unfollow={props.unfollow}
                 follow={props.follow}
    />
  });
  return (
    <div>
      <div className={style.headingText}>TOTAL USERS: {props.totalUsersCount}</div>
      <div>
        {usersElements}
      </div>

    </div>
  );
}


export default Users;
