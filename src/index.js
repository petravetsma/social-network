import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import './index.css';

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store))

export default rerenderEntireTree;

