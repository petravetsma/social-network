import React from "react";
import dialogsReducer, {addMessage, initialState} from "./dialogs-reducer";

const state = initialState;

describe(`dialogsReducer immutability:`, () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test(`addMessage action creator should be immutable`, () => {
    dialogsReducer(inputState, addMessage('text'));
    expect(inputState).toEqual(state);
  });

  test('default dispatch should be immutable', () => {
    dialogsReducer(inputState, {type: null});
    expect(inputState).toEqual(state);
  })
})

describe('dialogsReducer handles actions properly:', () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test('addMessage add correct message to state', () => {
    const newState = dialogsReducer(inputState, addMessage('text'));
    const newMessage = {
      id: inputState.messages[inputState.messages.length - 1].id + 1,
      message: 'text',
      from: 'me'
    }
    expect(newState).toEqual({
      ...inputState,
      messages: [...inputState.messages, newMessage]
    })
  });
})



