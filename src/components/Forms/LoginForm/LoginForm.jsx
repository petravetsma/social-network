import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {validate} from '../Validation/Validation'
import style from './LoginForm.module.css';

const LoginForm = (props) => {
  const authMessage = props.authResponse && props.authResponse.resultCode !== 0
    ? <div className={style.error}>{props.authResponse.messages.join(' ')}</div> : null;
  ;
  return (
    <div>
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
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
          </div>
          <div>
            <label>
              <Field type="checkbox" name="rememberMe"/>
              Remember Me
            </label>
          </div>
          <button type="submit">Submit</button>
          <ErrorMessage name="email"/>
          <ErrorMessage name="password"/>
          {authMessage}
        </Form>
      </Formik>
    </div>
  )
};

export default LoginForm;
