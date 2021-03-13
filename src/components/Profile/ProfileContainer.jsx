import React from 'react';
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {withRouter} from "react-router";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
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
