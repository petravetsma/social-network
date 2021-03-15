import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const AUTH_RESPONSE = 'AUTH_RESPONSE';

const initialState = {
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

export const getUserData = () => (dispatch) => {
  return authAPI.getAuth()
    .then(response => {
      if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      dispatch(setAuthResponse(response));
      if (response.resultCode === 0) {
        dispatch(getUserData());
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    })
}

export default authReducer;
