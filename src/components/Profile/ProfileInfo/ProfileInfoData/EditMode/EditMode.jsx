import React from "react";
import {Formik, Form, Field} from "formik";
import style from './EditMode.module.css';
import {TextField, Switch} from 'formik-material-ui';

function EditMode(props) {
  const errorMessage = <div className={style.errorMessage}>{props.profileResponseMessage}</div>;
  const contacts = props.profile.contacts;
  const contactsListFields = [];
  for (const [key,] of Object.entries(contacts)) {
    contactsListFields.push(<div key={key} className={style.contactField}>
      <Field id={key}
             name={key}
             placeholder={key}
             component={TextField}/></div>)
  }
  if (props.editMode && props.profileResponseCode === 0) {
    props.setEditMode(false)
    props.resetResponse()
  }
  return (
    <Formik
      initialValues={{
        fullName: '',
        aboutMe: '',
        lookingForAJob: false,
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
        const profile = {
          userId: props.authenticatedUserId,
          lookingForAJob: values.lookingForAJob,
          lookingForAJobDescription: values.lookingForAJobDescription,
          aboutMe: values.aboutMe,
          fullName: values.fullName,
          contacts: {
            github: values.github,
            vk: values.vk,
            facebook: values.facebook,
            instagram: values.instagram,
            twitter: values.twitter,
            website: values.website,
            youtube: values.youtube,
            mainLink: values.mainLink,
          }
        }
        props.saveProfile(profile)
      }}>
      <Form className={style.form}>
        <div className={style.submitBtnWrap}>
          {props.children}
        </div>
        <div>
          <Field id="fullName"
                 name="fullName"
                 placeholder="Full Name"
                 component={TextField}
          />
        </div>
        <div>
          <Field id="aboutMe"
                 name="aboutMe"
                 placeholder="About Me"
                 component={TextField}
          />
        </div>
        <div>
          <Field type="checkbox"
                 id="lookingForAJob"
                 name="lookingForAJob"
                 placeholder="lookingForAJob"
                 component={Switch}/>

        </div>
        <div>
          <Field id="lookingForAJobDescription"
                 name="lookingForAJobDescription"
                 placeholder="Professional Skills"
                 component={TextField}/>
        </div>
        <div>
          <h3>Contacts</h3>
          <div className={style.contactsFields}>
            {contactsListFields}
          </div>
        </div>
        {props.profileResponseMessage && errorMessage}
      </Form>
    </Formik>
  )
}

export default EditMode;
