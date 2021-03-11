const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  pageCount: 1
};

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
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pageCount: action.currentPage
      }
    default:
      return state;
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const addUsersAC = (users) => {
  return {
    type: ADD_USERS,
    users
  }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  }
}

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export default usersReducer;
