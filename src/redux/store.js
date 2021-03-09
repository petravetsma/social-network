import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    this.getState().profilePage = profileReducer(this.getState().profilePage, action);
    this.getState().dialogPage = dialogsReducer(this.getState().dialogPage, action);
    this.getState().sideBar = sidebarReducer(this.getState().sideBar, action);
    this._callSubscriber(this._state);
  }
}
