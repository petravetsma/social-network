import {usersAPI} from "../api/api"
import {Photos} from "../types/types";

const FOLLOW: string = 'community-network/users/FOLLOW'
const UNFOLLOW: string = 'community-network/users/UNFOLLOW'
const ADD_USERS: string = 'community-network/users/ADD_USERS'
const SET_TOTAL_USERS_COUNT: string = 'community-network/users/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE: string = 'community-network/users/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING: string = 'community-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS: string = 'community-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'

type User = {
  name: string
  id: number
  photos: Photos
  status: null | string,
  followed: boolean
}

export const initialState = {
  users: [] as Array<User>,
  pageSize: 5,
  totalUsersCount: 0,
  pageCount: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> // Array of users IDs
}

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: any): InitialState => {
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

type FollowSuccessfulAction = {
  type: typeof FOLLOW
  userId: number
}

export const followSuccessful = (userId: number): FollowSuccessfulAction => {
  return {
    type: FOLLOW,
    userId
  }
}

type UnfollowSuccessfulAction = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowSuccessful = (userId: number): UnfollowSuccessfulAction => {
  return {
    type: UNFOLLOW,
    userId
  }
}

type AddUsersAction = {
  type: typeof ADD_USERS
  users: Array<User>
}

export const addUsers = (users: Array<User>): AddUsersAction => {
  return {
    type: ADD_USERS,
    users
  }
}

type SetTotalUsersCount = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCount => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  }
}

type SetCurrentPageAction = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageAction => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

type ToggleFetchingAction = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const toggleFetching = (isFetching: boolean): ToggleFetchingAction => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

type ToggleFollowingProgressAction = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number):ToggleFollowingProgressAction => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
}

export const onMountGetUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(addUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(toggleFetching(false));
  }
}

export const onUpdateGetUsers = (pageNumber: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFetching(true));
    dispatch(setCurrentPage(pageNumber));
    const response = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(addUsers(response.items));
    dispatch(toggleFetching(false));
  }
}

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.resultCode === 0) {
      dispatch(followSuccessful(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  }
}

export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await usersAPI.unfollow(userId);
    if (response.resultCode === 0) {
      dispatch(unfollowSuccessful(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  }
}


export default usersReducer;
