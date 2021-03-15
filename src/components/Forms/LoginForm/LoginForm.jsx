import React from "react";
import {Field, Form, Formik} from "formik";

const LoginForm = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false
      }}
      onSubmit={(values) => {
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
            <Field type="checkbox" name="rememberMe"/>
            Remember Me
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default LoginForm;
