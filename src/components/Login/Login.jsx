import React from 'react';
import LoginForm from "../Forms/LoginForm/LoginForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import style from './Login.module.css';

const Login = (props) => {
  return (
    <div className={style.loginPageWrap}>
      <h3 className={style.headingText}>Test account</h3>
      <b>Email: free@samuraijs.com</b>
      <b>Password: free</b>
      <div className={style.loginFormWrap}>
        <LoginForm login={props.login} authResponse={props.authResponse}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    authResponse: state.auth.authResponse
  }
)

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {login}))
(Login);
