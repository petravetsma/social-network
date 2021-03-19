import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import user_icon from '../../../assets/images/user.png'
import Status from "./Status/Status";
import style from "./ProfileInfo.module.css";
import {Button} from "@material-ui/core";

const ProfileInfo = (props) => {
  if (!props.profile || props.isFetching) {
    return <Preloader/>
  }
  const contacts = props.profile.contacts;
  const contactsList = [];
  for (const [key, value] of Object.entries(contacts)) {
    if (value) {
      contactsList.push(<li key={key}>{key}: value</li>);
    }
  }

  const onUploadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const uploadAvatarElement = <div>
    <Button variant="contained" disableElevation>
      <label htmlFor='avatar-img' className={style.avatarLabel}>Upload avatar</label>
    </Button>

    <input className={style.avatarInput}
           accept=".png, .jpg, .jpeg"
           type='file'
           id='avatar-img'
           onChange={onUploadPhoto}/>
  </div>
  return (
    <div className={style.mainWrap}>
      <div>
        <img className={style.userImg}
             src={props.profile.photos.large ? props.profile.photos.large : user_icon}
             alt="user"/>
      </div>
      <div>
        {props.isOwner && uploadAvatarElement}
      </div>
      <div>
        Hello guys! My name is {props.profile.fullName} and my ID is {props.profile.userId}.
        <p>About me:</p>
        <p>{props.profile.aboutMe}</p>
        {props.profile.lookingForAJob
          ? <div>
            <p>I'm looking for a job</p>
            {props.profile.lookingForAJobDescription
              ? <div>
                <span>Looking for a job status: </span>
                <span>{props.profile.lookingForAJobDescription}</span>
              </div>
              : null}
          </div>
          : <p>I'm not looking for a job</p>}
      </div>
      {contactsList.length !== 0
        ? <div>
          <h3>Contacts</h3>
          <ul>
            {contactsList}
          </ul>
        </div>
        : null}

      <div>
        <Status status={props.status} updateUserStatus={props.updateUserStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;
