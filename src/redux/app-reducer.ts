import {getUserData} from './auth-reducer'

const APP_INITIALIZATION: string = 'community-network/app/APP_INITIALIZED'
const ERROR_MESSAGE: string = 'community-network/app/ERROR_MESSAGE'

export const initialState = {
  isAppInitialized: false,
  error: null as string | null
};

type InitialState = typeof initialState

const appReducer = (state = initialState, action: any): InitialState => {
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

type AppInitialization = {
  type: typeof APP_INITIALIZATION
}

export const setAuthResponse = ():AppInitialization => {
  return {
    type: APP_INITIALIZATION
  }
}

type ErrorMessage = {
  type: typeof ERROR_MESSAGE
  error: string
}

export const setError = (error: string):ErrorMessage => {
  return {
    type: ERROR_MESSAGE,
    error
  }
}

export const appInitialization = () => (dispatch: any) => {
    const promise = dispatch(getUserData())
    promise.then(() => {
      dispatch(setAuthResponse())
    });
}


export default appReducer
