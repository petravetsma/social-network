const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD-USERS';

const initialState = {users: []};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              follow: !u.follow
            }
          }
          return u;
        })
      };
    case ADD_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    default:
      return state;
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId: userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId
  }
}

export const addUsersAC = (users) => {
  return {
    type: ADD_USERS,
    users: users
  }
}

export default usersReducer;
