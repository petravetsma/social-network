import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

test('render react App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
