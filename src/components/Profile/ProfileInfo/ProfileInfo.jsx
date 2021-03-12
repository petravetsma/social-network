import React from 'react';
import s from './ProfileInfo.module.css';
import profile_wallpaper from './../../../assets/images/profile_wallpaper.jpg';
import Preloader from '../../common/Preloader/Preloader';
import user_icon from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img className={s.img} src={profile_wallpaper}
             alt="content"/>
      </div>
      <div>
        <img src={props.profile.photos.large ? props.profile.photos.large : user_icon} alt="user"/>
      </div>
      <div>
        Hello guys! My name is {props.profile.fullName} and my ID is {props.profile.userId} .
        { props.profile.lookingForAJob ? <p>I'm looking for a job</p> : null}
      </div>
    </div>
  );
}

export default ProfileInfo;
