import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {theme} from "./theme/theme";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


