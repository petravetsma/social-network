import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {Formik, Form, Field} from "formik";
import style from './ProfileInfoData.module.css';
import {TextField, Switch} from 'formik-material-ui';

function ProfileInfoData(props) {
  const [editMode, setEditMode] = useState(false);
  const editProfileButton = <div className={style.editProfileBtnWrap}>
    <Button
      variant="contained" disableElevation
      onClick={() => {
        setEditMode(!editMode)
      }}>
      {editMode ? 'Save' : 'Edit profile info'}
    </Button>
  </div>;
  const contacts = props.profile.contacts;
  const contactsList = [];
  for (const [key, value] of Object.entries(contacts)) {
    if (value) {
      contactsList.push(<li key={key}>
        {editMode
          ? <Field id={key} name={key} placeholder={key} component={TextField}/>
          : <span>{key}: {value}</span>
        }
      </li>);
    }
  }
  return (


    <Formik
      initialValues={{
        fullName: '',
        lookingForAJob: '',
        lookingForAJobDescription: '',
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}>
      <Form className={style.form}>
        {editProfileButton}
        <div>
          {editMode
            ? <Field id="fullName"
                   name="fullName"
                   placeholder="Full Name"
                   component={TextField}
            />
            : <><b>Full Name: </b><span>{props.profile.fullName}</span></>}
        </div>
        <div>

          {editMode
            ? <Field type="checkbox"
            id="lookingForAJob"
            name="lookingForAJob"
            placeholder="lookingForAJob"
            component={Switch}/>
          : <><b>Looking for a job: </b><span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span></>}

        </div>
        <div>

          {editMode
            ? <Field id="lookingForAJobDescription"
                   name="lookingForAJobDescription"
                   placeholder="Work Skills"
                   component={TextField}/>
          : <span>{props.profile.lookingForAJobDescription}</span>}

        </div>

        {contactsList.length !== 0
          ? <div>
            <h3>Contacts</h3>
            <ul className={style.contactsList}>
              {contactsList}
            </ul>
          </div>
          : null}

      </Form>
    </Formik>
  )
}

export default ProfileInfoData;
