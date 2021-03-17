const SEND_MESSAGE = 'community-network/dialogs/SEND_MESSAGE';

export const initialState = {
  dialogs: [
    {id: 0, name: 'Ilya'},
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Mike'}
  ],
  messages: [
    {id: 0, message: 'Hi, how is it going?', from: 'me'},
    {id: 1, message: 'Awesome!', from: 'them'},
    {id: 2, message: 'Good!', from: 'me'}
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.messages.length,
        message: action.message,
        from: 'me'
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
}

export const addMessage = (message) => ({type: SEND_MESSAGE, message})

export default dialogsReducer;
