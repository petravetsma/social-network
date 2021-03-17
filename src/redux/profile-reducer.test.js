import React from "react";
import profileReducer, {addPost, initialState, setUserProfile, setUserStatus} from "./profile-reducer";

const state = initialState;

describe(`profileReducer immutability:`, () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test(`addPost action creator should be immutable`, () => {
    profileReducer(inputState, addPost('text'));
    expect(inputState).toEqual(state);
  });

  test(`setUserProfile action creator should be immutable`, () => {
    profileReducer(inputState, setUserProfile('text'));
    expect(inputState).toEqual(state);
  });

  test(`setUserStatus action creator should be immutable`, () => {
    profileReducer(inputState, setUserStatus('text'));
    expect(inputState).toEqual(state);
  });

  test('default dispatch should be immutable', () => {
    profileReducer(inputState, {type: null});
    expect(inputState).toEqual(state);
  })
})

describe('profileReducer handles actions properly:', () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state}
  });

  test(`addPost should add post`, () => {
    const outputState = profileReducer(inputState, addPost('text'));
    let id;
    if (inputState.posts.length === 0) {
      id = 0;
    } else {
      id = inputState.posts[inputState.posts.length - 1].id + 1;
    }
    const newPost = {
      id: id,
      text: 'text',
      likes: '0'
    }
    expect(outputState).toEqual({
      ...inputState,
      posts: [...inputState.posts, newPost]
    });
  });
})



