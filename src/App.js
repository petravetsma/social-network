import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Sidebar friends={props.store.getState().sideBar.friends}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs">
            <DialogsContainer/>
          </Route>
          <Route path="/profile/:userId?">
            <ProfileContainer/>
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
