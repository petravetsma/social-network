import React from 'react';
import {Formik, Field, Form} from 'formik';

const Login = () => {
  return (
    <div>
      <h2>Login for access to messages/profile pages</h2>
      <LoginForm/>
    </div>
  )
}


const LoginForm = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
        toggle: false
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
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
          <Field type="checkbox" name="toggle"/>
          Remember Me
        </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Login;
