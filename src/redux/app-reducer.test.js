import React from "react";
import appReducer, {appInitialization, initialState, setAuthResponse} from "./app-reducer";


const state = initialState;

describe(`appReducer immutability:`, () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test(`setAuthResponse action creator should be immutable`, () => {
    appReducer(inputState, setAuthResponse('text'));
    expect(inputState).toEqual(state);
  });

  test(`appInitialization thunk creator should be immutable`, () => {
    appReducer(inputState, appInitialization());
    expect(inputState).toEqual(state);
  });

  test('default dispatch should be immutable', () => {
    appReducer(inputState, {type: null});
    expect(inputState).toEqual(state);
  })
})

describe('appReducer handles actions properly:', () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test('setAuthResponse action creator work properly', () => {
    const newState = appReducer(inputState, setAuthResponse());
    expect(newState).toEqual({
      ...inputState,
      isAppInitialized: true
    })
  });
})



