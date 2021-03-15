import React from 'react';
import LoginForm from "../Forms/LoginForm/LoginForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Login = (props) => {
  return (
    <div>
      <h2>Login for access to messages/your profile page</h2>
      <LoginForm login={props.login} authResponse={props.authResponse}/>
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
