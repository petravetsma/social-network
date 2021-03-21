import React, {useState} from "react";
import {Button} from "@material-ui/core";
import DisplayMode from "./DisplayMode/DisplayMode";
import EditMode from "./EditMode/EditMode";

function ProfileInfoData(props) {
  const [editMode, setEditMode] = useState(false);
  const editProfileBtnElement = <Button
    variant="contained"
    disableElevation
    onClick={() => {
      setEditMode(true)
    }}>
    Edit profile info</Button>;

  const saveProfileDataBtnElement = <Button
    type="submit"
    variant="contained"
    disableElevation>Save</Button>;


  return (
    <>
      {props.isOwner && editMode
        ? <EditMode profile={props.profile}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    saveProfile={props.saveProfile}
                    authenticatedUserId={props.authenticatedUserId}
                    profileResponseMessage={props.profileResponseMessage}
                    profileResponseCode={props.profileResponseCode}
                    resetResponse={props.resetResponse}>
          {saveProfileDataBtnElement}
        </EditMode>
        : <DisplayMode profile={props.profile}>
          {props.isOwner && editProfileBtnElement}
        </DisplayMode>
      }
    </>
  )
}

export default ProfileInfoData;
