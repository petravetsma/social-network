const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const ADD_USERS = 'ADD-USERS';

const initialState = {
  users: [
    {
      id: '0',
      fullName: 'Dmitriy K',
      status: 'I am looking for a job',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      follow: false,
      location: {
        country: 'Belarus',
        city: 'Minsk'
      }
    },
    {
      id: '1',
      fullName: 'Svetlana D',
      status: 'I am pretty',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      follow: false,
      location: {
        country: 'Lithuania',
        city: 'Vilnius'
      }
    },
    {
      id: '2',
      fullName: 'Sergei S',
      status: 'I like tennis!',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      follow: true,
      location: {
        country: 'Ukraine',
        city: 'Kiev'
      }
    },
    {
      id: '3',
      fullName: 'Andrew T.',
      status: 'ready to help',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      follow: true,
      location: {
        country: 'Belarus',
        city: 'Minsk'
      }
    },
  ],
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
