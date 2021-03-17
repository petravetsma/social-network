import {getUserData} from "./auth-reducer";

const APP_INITIALIZATION = 'community-network/app/APP_INITIALIZED';

export const initialState = {
  isAppInitialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_INITIALIZATION:
      return {
        ...state,
        isAppInitialized: true
      }
    default:
      return state;
  }
}

export const setAuthResponse = () => (
  {
    type: APP_INITIALIZATION
  }
)

export const appInitialization = () => (dispatch) => {
    const promise = dispatch(getUserData());
    promise.then(() => {
      dispatch(setAuthResponse());
    });
}


export default appReducer;
