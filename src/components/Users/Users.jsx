import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  const onFollow = (userId) => {
    props.follow(userId);
  }

  const onUnfollow = (userId) => {
    props.unfollow(userId);
  }
  const usersElements = props.users.map(v => <div className={s.userWrap} key={v.id}>
    <div className={s.photoBtnWrap}>
      <div>
        <img className={s.userPhoto} src={v.photoURL} alt={v.fullName}/>
      </div>
      <div>
        {v.follow
          ? <button className={s.btn} onClick={() => onUnfollow(v.id)}>Unfollow</button>
          : <button className={s.btn} onClick={() => onFollow(v.id)}>Follow</button>}
      </div>
    </div>
    <div className={s.textWrap}>
      <div className={s.mainText}>
        <p>{v.fullName}</p>
        <p>{v.status}</p>
      </div>
      <div>
        <p>{v.location.country},</p>
        <p>{v.location.city}</p>
      </div>
    </div>
  </div>);
  return (
    <div>
      {usersElements}
    </div>
  );


}

export default Users;
