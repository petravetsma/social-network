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
import Login from "./components/Login/Login";
import {appInitialization} from "./redux/app-reducer";
import {connect} from "react-redux";
import PreloaderApp from "./components/common/Preloader/PreloaderApp";

class App extends React.Component {
  componentDidMount() {
    this.props.appInitialization();
  }

  render() {

    if (!this.props.isAppInitialized) return <PreloaderApp/>
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Sidebar friends={this.props.store.getState().sideBar.friends}/>
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?">
            <ProfileContainer/>
          </Route>
          <Route path="/dialogs">
            <DialogsContainer/>
          </Route>
          <Route path="/users">
            <UsersContainer/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/news">
            <News/>
          </Route>
          <Route path="/music">
            <Music/>
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAppInitialized: state.app.isAppInitialized
})

export default connect(mapStateToProps, {appInitialization})(App);
