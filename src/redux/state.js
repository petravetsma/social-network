const store = {
  _state: {
    dialogPage: {
      dialogs: [
        {id: '0', name: 'Ilya'},
        {id: '1', name: 'Anton'},
        {id: '2', name: 'Nikita'},
        {id: '3', name: 'Mike'}
      ],
      messages: [
        {id: '0', message: 'Hi, how is it going?', from: 'me'},
        {id: '1', message: 'Awesome!', from: 'them'},
        {id: '2', message: 'Good!', from: 'me'}
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        {id: '0', text: 'Hello guys', likes: '1337'},
        {id: '1', text: 'First post', likes: '12'},
        {id: '2', text: 'I\'m good', likes: '16'}
      ],
      newPostText: ''
    },
    sideBar: {
      friends: [
        {id: '0', name: 'Ilya'},
        {id: '1', name: 'Anton'},
        {id: '2', name: 'Nikita'},
        {id: '3', name: 'Anton'},
        {id: '4', name: 'Nikita'}
      ]
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    return undefined;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const postText = this._state.profilePage.newPostText;
      const newPost = {
        id: this._state.profilePage.posts.length,
        text: postText,
        likes: '0'
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      const message = this._state.dialogPage.newMessageText;
      const newMessage = {
        id: this._state.profilePage.posts.length,
        message: message,
        from: 'me'
      };
      this._state.dialogPage.messages.push(newMessage);
      this._state.dialogPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogPage.newMessageText = action.value;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-POST-TEXT') {
      this._state.profilePage.newPostText = action.value;
      this._callSubscriber(this._state);
    }
  }
}

export const updateMessageTextActionCreator = (value) => {
  return {
    type: 'UPDATE-MESSAGE-TEXT',
    value: value
  };
}

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  };
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  };
}

export const addPostTextActionCreator = (value) => {
  return {
    type: 'UPDATE-POST-TEXT',
    value: value
  }
}

export default store;
