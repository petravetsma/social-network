import React from 'react';
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import Profile from "./Profile";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI.getUserProfile(userId)
    .then(data => {
        this.props.setUserProfile(data);
      });
  }
  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const WithRouterProfile = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfile);
