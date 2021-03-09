import React from 'react';
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const store = props.store;
  const profilePage = store.getState().profilePage;

  const addPost = () => {
    store.dispatch(addPostActionCreator());
  }

  const changeInput = (value) => {
    store.dispatch(addPostTextActionCreator(value));
  }

  return (
    <MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} addPost={addPost}
             changeInput={changeInput}/>
  );
}

export default MyPostsContainer;
