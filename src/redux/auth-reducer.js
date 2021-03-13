const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false
};

const authReducer = (state= initialState, action) => {
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


export default authReducer;