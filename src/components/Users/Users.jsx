import React from 'react';
import style from "./Users.module.css";
import userIcon from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {


  return (
    <div>
      <div>
        <span onClick={() => {
          props.onPageChanged(props.pageCount - 1)
        }}>{props.pageCount - 1}</span>
        <span onClick={() => {
          props.onPageChanged(props.pageCount)
        }}>{props.pageCount}</span>
        <span onClick={() => {
          props.onPageChanged(props.pageCount + 1)
        }}>{props.pageCount + 1}</span>
      </div>
      <div>TOTAL USERS: {props.totalUsersCount}</div>
      <div>
      </div>
      {
        props.users.map(v => {
          return (
            <div className={style.userWrap} key={v.id}>
              <div className={style.photoBtnWrap}>
                <div>
                  <NavLink to={`/profile/${v.id}`}>
                    <img className={style.userPhoto}
                         src={v.photos.small
                           ? v.photos.small
                           : userIcon}
                         alt={v.name}/>
                  </NavLink>
                </div>
                <div>
                  {v.followed
                    ? <button disabled={props.followingInProgress.some(id => id === v.id)} className={style.btn} onClick={() => {
                      props.unfollow(v.id)

                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === v.id)} className={style.btn} onClick={() => {
                      props.follow(v.id)

                    }}>Follow</button>}
                </div>
              </div>
              <div className={style.textWrap}>
                <div className={style.mainText}>
                  <p>{v.name}</p>
                  <p>{v.status}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}


export default Users;
