import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {withRouter} from "react-router";

class Profile extends React.Component {
  componentDidMount() {
    debugger;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <ProfileInfo profile={this.props.profile}/>
        <MyPostsContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const WithRouterProfile = withRouter(Profile);

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfile);
