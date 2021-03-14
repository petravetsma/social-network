import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import user_icon from '../../../assets/images/user.png'
import Status from "./Status/Status";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src={props.profile.photos.large ? props.profile.photos.large : user_icon} alt="user"/>
      </div>
      <div>
        Hello guys! My name is {props.profile.fullName} and my ID is {props.profile.userId} .
        { props.profile.lookingForAJob ? <p>I'm looking for a job</p> : null}
      </div>
      <div>
        <Status status="Hello i'm cool!"/>
      </div>
    </div>
  );
}

export default ProfileInfo;
