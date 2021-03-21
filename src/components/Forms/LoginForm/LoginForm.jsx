import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {validate} from '../Validation/Validation'
import style from './LoginForm.module.css';
import { TextField, Switch } from 'formik-material-ui';
import { Button } from "@material-ui/core";

const LoginForm = (props) => {
  const authMessage = props.authResponse && props.authResponse.resultCode !== 0
    ? <div className={style.error}>{props.authResponse.messages.join(' ')}</div> : null;
  ;
  return (
    <div className={style.formWrap}>
      <h1>Login</h1>
      <Formik validate={validate}
              initialValues={{
                email: '',
                password: '',
                rememberMe: false
              }}
              onSubmit={(values) => {
                const {email, password, rememberMe} = values;
                props.login(email, password, rememberMe);
              }}
      >
        <Form>
          <div>
            <Field
              component={TextField}
              id="email"
              name="email"
              placeholder="email"
              type="email"
            />
          </div>
          <div>
            <Field
              component={TextField}
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
          </div>
          <div>
            <label>
              <Field type="checkbox" name="rememberMe" component={Switch}/>
              Remember Me
            </label>
          </div>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
          <ErrorMessage name="email"/>
          <ErrorMessage name="password"/>
          {authMessage}
        </Form>
      </Formik>
    </div>
  )
};

export default LoginForm;
