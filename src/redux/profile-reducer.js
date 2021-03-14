import {profileAPI} from "../api/api";

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

const initialState = {
  posts: [
    {id: '0', text: 'Hello guys', likes: '1337'},
    {id: '1', text: 'First post', likes: '12'},
    {id: '2', text: 'I\'m good', likes: '16'}
  ],
  profile: null,
  newPostText: '',
  status: null
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
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
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

export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status
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

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId)
      .then(response => {
        dispatch(setUserStatus(response));
      })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setUserStatus(status));
        }
      })
  }
}

export default profileReducer;
