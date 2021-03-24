import {profileAPI} from "../api/api"
import {Post, Profile} from "../types/types";

const ADD_POST: string = 'community-network/profile/ADD_POST'
const SET_USER_PROFILE: string = 'community-network/profile/SET_USER_PROFILE'
const SET_USER_STATUS: string = 'community-network/profile/SET_USER_STATUS'
const TOGGLE_IS_FETCHING: string = 'community-network/profile/TOGGLE_IS_FETCHING'
const SAVE_PHOTO_SUCCESS: string = 'community-network/profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS: string = 'community-network/profile/SAVE_PROFILE'
const SET_PROFILE_RESPONSE_MESSAGE: string = 'community-network/profile/SAVE_PROFILE_RESPONSE_MESSAGE'
const SET_PROFILE_RESPONSE_CODE: string = 'community-network/profile/SAVE_PROFILE_RESPONSE_CODE'
const RESET_RESPONSE: string = 'community-network/profile/RESET_RESPONSE'

export const initialState = {
  posts: [] as Array<Post>,
  profile: null as Profile | null,
  status: null as string | null,
  isFetching: false,
  profileResponseMessage: null as string | null,
  profileResponseCode: null as string | null
}

type InitialState = typeof initialState

const profileReducer = (state = initialState, action: any): InitialState => {
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
        } as Profile
      }
    case SAVE_PROFILE_SUCCESS:
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

type AddPostAction = {
  type: typeof ADD_POST
  postText: string
}

export const addPost = (postText: string): AddPostAction => {
  return {
    type: ADD_POST,
    postText
  }
}

type SetUserProfileAction = {
  type: typeof SET_USER_PROFILE
  profile: string
}

export const setUserProfile = (profile: string): SetUserProfileAction => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

type SetUserStatusAction = {
  type: typeof SET_USER_STATUS
  status: string
}

export const setUserStatus = (status: string): SetUserStatusAction => {
  return {
    type: SET_USER_STATUS,
    status
  }
}

type ToggleFetchingAction = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

const toggleFetching = (isFetching: boolean): ToggleFetchingAction => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

type SavePhotoSuccessAction = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: string
}

const savePhotoSuccess = (photos: string): SavePhotoSuccessAction => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
}

type SaveProfileSuccessAction = {
  type: typeof SAVE_PROFILE_SUCCESS
  profile: string
}


const saveProfileSuccess = (profile: string): SaveProfileSuccessAction => {
  return {
    type: SAVE_PROFILE_SUCCESS,
    profile
  }
}

type SetProfileResponseMessageAction = {
  type: typeof SET_PROFILE_RESPONSE_MESSAGE
  response: string | null
}

const setProfileResponseMessage = (response: string | null): SetProfileResponseMessageAction => {
  return {
    type: SET_PROFILE_RESPONSE_MESSAGE,
    response
  }
}

type SetProfileResponseCodeAction = {
  type: typeof SET_PROFILE_RESPONSE_CODE
  code: string
}

const setProfileResponseCode = (code: string): SetProfileResponseCodeAction => {
  return {
    type: SET_PROFILE_RESPONSE_CODE,
    code
  }
}

type resetResponseAction = {
  type: typeof RESET_RESPONSE
}


export const resetResponse = (): resetResponseAction => {
  return {
    type: RESET_RESPONSE
  }
}

export const getUserProfile = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFetching(true));
    const response = await profileAPI.getUserProfile(userId);
    console.log(response)
    dispatch(toggleFetching(false));
    dispatch(setUserProfile(response));
  }
}

export const getUserStatus = (userId: number) => {
  return async (dispatch: any) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response));
  }
}

export const updateUserStatus = (status: string) => {
  return async (dispatch: any) => {
    const response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  }
}

export const savePhoto = (photoFile: string) => {
  return async (dispatch: any) => {
    dispatch(toggleFetching(true));
    const response = await profileAPI.savePhoto(photoFile);
    dispatch(toggleFetching(false));
    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos))
    }
  }
}

export const saveProfile = (profile: Profile) => {
  return async (dispatch: any) => {
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
