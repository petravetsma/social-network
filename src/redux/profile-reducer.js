const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
  posts: [
    {id: '0', text: 'Hello guys', likes: '1337'},
    {id: '1', text: 'First post', likes: '12'},
    {id: '2', text: 'I\'m good', likes: '16'}
  ],
  newPostText: ''
};

const profileReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: String(state.posts.length),
        text: state.newPostText,
        likes: '0'
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.value
      };
    default:
      return state;
  }

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
}

export const addPostTextActionCreator = (value) => {
  return {
    type: UPDATE_POST_TEXT,
    value: value
  }
}

export default profileReducer;
