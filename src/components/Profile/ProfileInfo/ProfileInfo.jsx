import React from 'react';
import s from './ProfileInfo.module.css';
import profile_wallpaper from './../../../assets/images/profile_wallpaper.jpg';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src={profile_wallpaper}
             alt="content"/>
      </div>
      <div>
        Hello guys! My name is ... .
      </div>
    </div>
  );
}

export default ProfileInfo;
