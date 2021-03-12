import React from 'react';
import s from "./Users.module.css";
import userIcon from "../../assets/images/user.png";

const Users = (props) => {
  return (
    <div>
      <div>
        <span onClick={() => { props.onPageChanged(props.pageCount - 1) }}>{props.pageCount - 1}</span>
        <span onClick={() => { props.onPageChanged(props.pageCount) }}>{props.pageCount}</span>
        <span onClick={() => { props.onPageChanged(props.pageCount + 1) }}>{props.pageCount + 1}</span>
      </div>
      <div>TOTAL USERS: {props.totalUsersCount}</div>
      <div>

      </div>
      {
        props.users.map(v => <div className={s.userWrap} key={v.id}>
          <div className={s.photoBtnWrap}>
            <div>
              <img className={s.userPhoto}
                   src={v.photos.small
                     ? v.photos.small
                     : userIcon}
                   alt={v.name}/>
            </div>
            <div>
              {v.follow
                ? <button className={s.btn} onClick={() => props.unfollow(v.id)}>Unfollow</button>
                : <button className={s.btn} onClick={() => props.follow(v.id)}>Follow</button>}
            </div>
          </div>
          <div className={s.textWrap}>
            <div className={s.mainText}>
              <p>{v.name}</p>
              <p>{v.status}</p>
            </div>
          </div>
        </div>)
      }
    </div>
  );
}


export default Users;
