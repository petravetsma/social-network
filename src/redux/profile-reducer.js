import {profileAPI} from "../api/api";

const ADD_POST = 'community-network/profile/ADD_POST';
const SET_USER_PROFILE = 'community-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'community-network/profile/SET_USER_STATUS';
const TOGGLE_IS_FETCHING = 'community-network/profile/TOGGLE_IS_FETCHING';
const SAVE_PHOTO_SUCCESS = 'community-network/profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'community-network/profile/SAVE_PROFILE';
const SET_PROFILE_RESPONSE_MESSAGE = 'community-network/profile/SAVE_PROFILE_RESPONSE_MESSAGE';
const SET_PROFILE_RESPONSE_CODE = 'community-network/profile/SAVE_PROFILE_RESPONSE_CODE';
const RESET_RESPONSE = 'community-network/profile/RESET_RESPONSE';


export const initialState = {
  posts: [],
  profile: null,
  status: null,
  isFetching: false,
  profileResponseMessage: null,
  profileResponseCode: null
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        }
      }
    case SAVE_PROFILE_SUCCESS: // TEST !
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile
        }
      }
    case SET_PROFILE_RESPONSE_MESSAGE:
      return {
        ...state,
        profileResponseMessage: action.response
      }
    case SET_PROFILE_RESPONSE_CODE:
      return {
        ...state,
        profileResponseCode: action.code
      }
    case RESET_RESPONSE:
      return {
        ...state,
        profileResponseMessage: null,
        profileResponseCode: null
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

const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
}

const saveProfileSuccess = (profile) => {
  return {
    type: SAVE_PROFILE_SUCCESS,
    profile
  }
}

const setProfileResponseMessage = (response) => {
  return {
    type: SET_PROFILE_RESPONSE_MESSAGE,
    response
  }
}

const setProfileResponseCode = (code) => {
  return {
    type: SET_PROFILE_RESPONSE_CODE,
    code
  }
}

export const resetResponse = () => {
  return {
    type: RESET_RESPONSE
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

export const savePhoto = (photoFile) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    const response = await profileAPI.savePhoto(photoFile);
    dispatch(toggleFetching(false));
    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos))
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch) => {
    const response = await profileAPI.saveProfile(profile);
    if (response.resultCode === 0) {
      dispatch(setProfileResponseCode(response.resultCode))
      dispatch(setProfileResponseMessage(null))
      dispatch(saveProfileSuccess(response.data))
    } else if (response.resultCode === 1) {
      dispatch(setProfileResponseCode(response.resultCode))
      dispatch(setProfileResponseMessage(response.messages.join(' ')))
    }
  }
}

export default profileReducer;
