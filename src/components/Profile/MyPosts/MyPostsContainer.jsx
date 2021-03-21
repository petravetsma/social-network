import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.profilePage.posts,
    smallPhoto: state.profilePage.profile?.photos?.small,
    isOwner: ownProps.isOwner
  };
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;
