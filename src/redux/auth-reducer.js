import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        isAuth: true,
        userId: action.data.userId,
        email: action.data.email,
        login: action.data.login
      }
    default:
      return state;
  }
}

export const setUserData = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login
    }
  };
}

export const getUserData = () => {
  return (dispatch) => {
    return authAPI.getAuth()
      .then(response => {
        if (response.resultCode === 0) {
          const {id, email, login} = response.data;
          dispatch(setUserData(id, email, login));
        }
      });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    return authAPI.login(email, password, rememberMe)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setUserData(null, email, null));
        }
      })
  }
}


export default authReducer;
