import {authAPI} from "../api/api";

const SET_USER_DATA = 'community-network/auth/SET_USER_DATA';
const AUTH_RESPONSE = 'community-network/auth/AUTH_RESPONSE';

export const initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false,
  authResponse: null
};

const authReducer = (state = initialState, action) => {
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
      return state;
  }
}

export const setAuthResponse = (authResponse) => (
  {
    type: AUTH_RESPONSE,
    authResponse
  }
)


export const setUserData = (userId, email, login, isAuth) => (
  {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth
    }
  }
)

export const getUserData = () => async (dispatch) => {
  const response = await authAPI.getAuth();
  if (response.resultCode === 0) {
    const {id, email, login} = response.data;
    dispatch(setUserData(id, email, login, true));
  }
  return response;
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
      dispatch(setAuthResponse(response));
      if (response.resultCode === 0) {
        dispatch(getUserData());
      }
}

export const logout = (changeRoute) => async (dispatch) => {
  const response = await authAPI.logout();
      if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
        changeRoute()
      }
}

export default authReducer;
