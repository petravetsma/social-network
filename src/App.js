import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
  return (
      <div className="app-wrapper">
        <Header/>
        <Sidebar friends={props.store.getState().sideBar.friends}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs">
            <DialogsContainer/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/users">
            <UsersContainer/>
          </Route>
        </div>
      </div>
  );
}

export default App;
