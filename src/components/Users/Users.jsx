import React from 'react';
import s from "./Users.module.css";
import userIcon from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
        props.users.map(v => <div className={s.userWrap} key={v.id}>
          <div className={s.photoBtnWrap}>
            <div>
              <NavLink to={`/profile/${v.id}`}>
                <img className={s.userPhoto}
                     src={v.photos.small
                       ? v.photos.small
                       : userIcon}
                     alt={v.name}/>
              </NavLink>
            </div>
            <div>
              {v.follow
                ? <button className={s.btn} onClick={() => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${v.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "589d610b-3a89-4024-a191-95da5ab1df45"
                    }
                  }).then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(v.id);
                    }
                  })

                }}>Unfollow</button>
                : <button className={s.btn} onClick={() => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${v.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "589d610b-3a89-4024-a191-95da5ab1df45"
                    }
                  }).then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(v.id);
                    }
                  })

                }}>Follow</button>}
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
