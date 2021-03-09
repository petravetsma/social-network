const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      const message = state.newMessageText;
      const newMessage = {
        id: String(state.messages.length),
        message: message,
        from: 'me'
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.value;
      return state;
    default:
      return state;
  }
}

export const updateMessageTextActionCreator = (value) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    value: value
  };
}

export const addMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  };
}

export default dialogsReducer;
