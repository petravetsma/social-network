import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  pageCount: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            }
          }
          return u;
        })
      };
    case  UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }
}

export const followSuccessful = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowSuccessful = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const addUsers = (users) => {
  return {
    type: ADD_USERS,
    users
  }
}

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const toggleFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
}

export const onMountGetUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(addUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(toggleFetching(false));
      });
  }
}

export const onUpdateGetUsers = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    dispatch(setCurrentPage(pageNumber));
    usersAPI.getUsers(pageNumber, pageSize)
      .then(response => {
        dispatch(addUsers(response.items));
        dispatch(toggleFetching(false));
      });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(followSuccessful(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(unfollowSuccessful(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      })
  }
}


export default usersReducer;
