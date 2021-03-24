const SEND_MESSAGE: string = 'community-network/dialogs/SEND_MESSAGE'

type Dialog = {
  id: number
  name: string
}

type Message = {
  id: number
  message: string
  from: string
}

export const initialState = {
  dialogs: [
    {id: 0, name: 'Ilya'},
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Mike'}
  ] as Array<Dialog>,
  messages: [
    {id: 0, message: 'Hi, how is it going?', from: 'me'},
    {id: 1, message: 'Awesome!', from: 'them'},
    {id: 2, message: 'Good!', from: 'me'}
  ] as Array<Message>
}

type InitialState = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialState => {
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
      return state
  }
}

type AddMessageAction = {
  type: typeof SEND_MESSAGE
  message: string
}

export const addMessage = (message: string): AddMessageAction => ({type: SEND_MESSAGE, message})

export default dialogsReducer
