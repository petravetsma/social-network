const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const postText = state.newPostText;
      const newPost = {
        id: String(state.posts.length),
        text: postText,
        likes: '0'
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.value;
      return state;
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
