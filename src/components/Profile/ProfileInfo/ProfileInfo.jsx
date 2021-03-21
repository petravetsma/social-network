import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Status from "./Status/Status";
import style from "./ProfileInfo.module.css";

import ProfileInfoAvatar from "./ProfileInfoAvatar/ProfileInfoAvatar";
import ProfileInfoData from "./ProfileInfoData/ProfileInfoData";
import {resetResponse} from "../../../redux/profile-reducer";

const ProfileInfo = (props) => {
  if (!props.profile || props.isFetching) {
    return <Preloader/>
  }
  return (
    <div className={style.mainWrap}>
      <ProfileInfoAvatar isOwner={props.isOwner}
                         photos={props.profile.photos}
                         savePhoto={props.savePhoto}/>
      <Status isOwner={props.isOwner}
              status={props.status}
              updateUserStatus={props.updateUserStatus}/>
      <ProfileInfoData isOwner={props.isOwner}
                       profile={props.profile}
                       saveProfile={props.saveProfile}
                       authenticatedUserId={props.authenticatedUserId}
                       profileResponseMessage={props.profileResponseMessage}
                       profileResponseCode={props.profileResponseCode}
                       resetResponse={props.resetResponse}/>
    </div>
  );
}

export default ProfileInfo;
