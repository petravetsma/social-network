const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

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
