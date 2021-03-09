import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://i.pinimg.com/originals/0a/4d/cb/0a4dcb92fa2d3c601b58d72720d6bec4.jpg"
             alt="content"/>
      </div>
      <div>
        Hello guys! My name is ... .
      </div>
    </div>
  );
}

export default ProfileInfo;
