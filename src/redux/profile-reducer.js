import {profileAPI} from "../api/api";

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  posts: [
    {id: '0', text: 'Hello guys', likes: '1337'},
    {id: '1', text: 'First post', likes: '12'},
    {id: '2', text: 'I\'m good', likes: '16'}
  ],
  profile: null,
  newPostText: ''
};

const profileReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: String(state.posts.length),
        text: state.newPostText,
        likes: '0'
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.value
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
}

export const addPostTextActionCreator = (value) => {
  return {
    type: UPDATE_POST_TEXT,
    value
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response));
      });
  }
}

export default profileReducer;
