import {getUserData} from "./auth-reducer";

const APP_INITIALIZATION = 'community-network/app/APP_INITIALIZED';
const ERROR_MESSAGE = 'community-network/app/ERROR_MESSAGE';

export const initialState = {
  isAppInitialized: false,
  error: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_INITIALIZATION:
      return {
        ...state,
        isAppInitialized: true
      }
    case ERROR_MESSAGE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export const setAuthResponse = () => {
  return {
    type: APP_INITIALIZATION
  }
}

export const setError = (error) => {
  return {
    type: ERROR_MESSAGE,
    error
  }
}

export const appInitialization = () => (dispatch) => {
    const promise = dispatch(getUserData());
    promise.then(() => {
      dispatch(setAuthResponse());
    });
}


export default appReducer;
