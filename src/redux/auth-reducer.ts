import {authAPI} from "../api/api"

const SET_USER_DATA: string = 'community-network/auth/SET_USER_DATA'
const AUTH_RESPONSE: string = 'community-network/auth/AUTH_RESPONSE'

export const initialState = {
  login: null as string | null,
  email: null as string | null,
  userId: null as number | null,
  isAuth: false,
  authResponse: null as string | null
};

type InitialState = typeof initialState

const authReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case AUTH_RESPONSE:
      return {
        ...state,
        authResponse: action.authResponse
      }
    default:
      return state
  }
}

type SetAuthResponse = {
  type: typeof AUTH_RESPONSE
  authResponse: string
}

export const setAuthResponse = (authResponse: string): SetAuthResponse => {
  return {
    type: AUTH_RESPONSE,
    authResponse
  }
}

type SetUserDataPayload = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetUserData = {
  type: typeof SET_USER_DATA
  payload: SetUserDataPayload
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserData => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth
    }
  }
}

export const getUserData = () => async (dispatch: any) => {
  const response = await authAPI.getAuth();
  if (response.resultCode === 0) {
    const {id, email, login} = response.data;
    dispatch(setUserData(id, email, login, true));
  }
  return response;
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe);
      dispatch(setAuthResponse(response));
      if (response.resultCode === 0) {
        dispatch(getUserData());
      }
}

export const logout = (changeRoute: any) => async (dispatch: any) => {
  const response = await authAPI.logout();
      if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
        changeRoute()
      }
}

export default authReducer;
