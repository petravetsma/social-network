import style from "./ProfileInfoAvatar.module.css";
import user_icon from "../../../../assets/images/user.png";
import React from "react";
import {Button} from "@material-ui/core";

function ProfileInfoAvatar(props) {
  const onUploadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  const uploadRef = React.createRef()
  const uploadAvatarElement = <div>
    <Button htmlFor='avatar-img'
            variant="contained"
            disableElevation
    onClick={() => {
      uploadRef.current.click();
    }}>
      Upload avatar
    </Button>
    <input ref={uploadRef}
           className={style.avatarInput}
           accept=".png, .jpg, .jpeg"
           type='file'
           id='avatar-img'
           onChange={onUploadPhoto}/>
  </div>;
  return (
    <div className={style.avatarBlockWrap}>
      <div>
        <img className={style.userImg}
             src={props.photos.large ? props.photos.large : user_icon}
             alt="user"/>
      </div>
      <div>
        {props.isOwner && uploadAvatarElement}
      </div>
    </div>
  )
}

export default ProfileInfoAvatar;
