import {profileAPI} from "../api/api";

const ADD_POST = 'community-network/profile/ADD_POST';
const SET_USER_PROFILE = 'community-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'community-network/profile/SET_USER_STATUS';
const TOGGLE_IS_FETCHING = 'community-network/profile/TOGGLE_IS_FETCHING';

export const initialState = {
  posts: [],
  profile: null,
  status: null,
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length,
        text: action.postText,
        likes: '0'
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }

}

export const addPost = (postText) => {
  return {
    type: ADD_POST,
    postText
  };
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

const toggleFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    const response = await profileAPI.getUserProfile(userId);
    dispatch(toggleFetching(false));
    dispatch(setUserProfile(response));
  }
}

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response));
  }
}

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  }
}

export default profileReducer;
