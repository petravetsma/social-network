import React from "react";
import usersReducer, {
  addUsers,
  followSuccessful,
  initialState, setCurrentPage,
  setTotalUsersCount, toggleFetching, toggleFollowingProgress,
  unfollowSuccessful
} from "./users-reducer";

const state = initialState;

describe(`profileReducer immutability:`, () => {
  let inputState;
  beforeEach(() => {
    inputState = {...state};
  })

  test(`followSuccessful action creator should be immutable`, () => {
    usersReducer(inputState, followSuccessful(54));
    expect(inputState).toEqual(state);
  });

  test(`unfollowSuccessful action creator should be immutable`, () => {
    usersReducer(inputState, unfollowSuccessful(10));
    expect(inputState).toEqual(state);
  });
  test(`addUsers action creator should be immutable`, () => {
    usersReducer(inputState, addUsers(['user']));
    expect(inputState).toEqual(state);
  });

  test(`setTotalUsersCount action creator should be immutable`, () => {
    usersReducer(inputState, setTotalUsersCount(54));
    expect(inputState).toEqual(state);
  });

  test(`setCurrentPage action creator should be immutable`, () => {
    usersReducer(inputState, setCurrentPage(1));
    expect(inputState).toEqual(state);
  });

  test(`toggleFetching action creator should be immutable`, () => {
    usersReducer(inputState, toggleFetching(true));
    expect(inputState).toEqual(state);
  });

  test(`toggleFollowingProgress action creator should be immutable`, () => {
    usersReducer(inputState, toggleFollowingProgress(true));
    expect(inputState).toEqual(state);
  });

  test('default dispatch should be immutable', () => {
    usersReducer(inputState, {type: null});
    expect(inputState).toEqual(state);
  })
})
