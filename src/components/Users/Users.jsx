import React from 'react';
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";


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
      <div className="commentBox">

      <Paginator
        pageCount={props.pageCount}
        onPageChange={props.onPageChange}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />

      </div>
      <div>TOTAL USERS: {props.totalUsersCount}</div>
      <div>
        {usersElements}
      </div>

    </div>
  );
}


export default Users;
