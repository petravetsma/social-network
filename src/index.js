import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import './index.css';
import MyContext from "./context";

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <MyContext.Provider value='provider-context'>
        <App store={store}/>
      </MyContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store))

export default rerenderEntireTree;

