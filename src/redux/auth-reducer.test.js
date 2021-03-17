import React from "react";
import authReducer, {initialState, setAuthResponse, setUserData} from "./auth-reducer";


const state = initialState;

describe(`authReducer immutability:`, () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test(`setAuthResponse action creator should be immutable`, () => {
    authReducer(inputState, setAuthResponse('text'));
    expect(inputState).toEqual(state);
  });

  test(`setUserData thunk creator should be immutable`, () => {
    authReducer(inputState, setUserData());
    expect(inputState).toEqual(state);
  });

  test('default dispatch should be immutable', () => {
    authReducer(inputState, {type: null});
    expect(inputState).toEqual(state);
  })
})

describe('authReducer handles actions properly:', () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test('setAuthResponse change state authResponse to true', () => {
    const newState = authReducer(inputState, setAuthResponse(true));
    expect(newState).toEqual({
      ...inputState,
      authResponse: true
    })
  });

  test('setAuthResponse change state authResponse to false', () => {
    const newState = authReducer(inputState, setAuthResponse(false));
    expect(newState).toEqual({
      ...inputState,
      authResponse: false
    })
  })
})



