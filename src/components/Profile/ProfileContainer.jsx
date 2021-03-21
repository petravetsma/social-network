import React from 'react';
import {connect} from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  resetResponse,
  savePhoto,
  saveProfile,
  updateUserStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import Profile from "./Profile";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authenticatedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
    profileResponseMessage: state.profilePage.profileResponseMessage,
    profileResponseCode: state.profilePage.profileResponseCode,
    authenticatedUserId: state.auth.userId,
  }
}

export default compose(
  connect(mapStateToProps,
    {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile, resetResponse}),
  withRouter
)(ProfileContainer)

