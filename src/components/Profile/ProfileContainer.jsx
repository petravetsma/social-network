import React from 'react';
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15659;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const WithRouterProfile = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithRouterProfile);
