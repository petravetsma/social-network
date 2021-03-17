import React from "react";
import sidebarReducer, {initialState} from "./sidebar-reducer";

const state = initialState;

describe(`profileReducer immutability:`, () => {
  test('default dispatch should be immutable', () => {
    const inputState = {...state};
    sidebarReducer(inputState, {type: null});
    expect(inputState).toEqual(state);
  })
})
