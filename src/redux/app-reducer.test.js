import React from "react";
import appReducer, {setAuthResponse as setAppResponse} from "./app-reducer";

const appReducerData = {
  reducer: appReducer,
  state: {
    isAppInitialized: false
  },
  actionCreator: setAppResponse
}

test(`reducer ${appReducerData.name} should be immutable`, () => {
  const inputState = {...appReducerData.state};
  appReducerData.reducer(inputState, appReducerData.actionCreator('text'));
  expect(JSON.stringify(inputState)).toBe(JSON.stringify(appReducerData.state));
});


