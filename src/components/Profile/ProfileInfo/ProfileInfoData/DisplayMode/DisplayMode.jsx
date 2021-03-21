import React, {useState} from "react";
import style from './DisplayMode.module.css';

function DisplayMode(props) {
  const profile = props.profile;
  const contacts = props.profile.contacts;
  const contactsList = [];
  for (const [key, value] of Object.entries(contacts)) {
    if (value) {
      contactsList.push(<li key={key}>{key}: {value}</li>);
    }
  }
  return (
    <>
      {props.children}
      <div>
        <b>Full Name: </b><span>{profile.fullName}</span>
      </div>
      <div>
        <b>About me: </b><span>{profile.aboutMe}</span>
      </div>
      <div>
        <b>Looking for a job: </b>
        <span>{profile.lookingForAJob ? 'Yes' : 'No'}</span>
      </div>
      <div>
        <span>{profile.lookingForAJobDescription}</span>
      </div>
      <div>
        {contactsList.length > 0 && <h3>Contacts</h3> }
        <ul className={style.contactsList}>
          {contactsList}
        </ul>
      </div>
    </>
  )
}

export default DisplayMode;
