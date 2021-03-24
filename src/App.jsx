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
import {appInitialization, setError} from "./redux/app-reducer";
import {connect} from "react-redux";
import PreloaderApp from "./components/common/Preloader/PreloaderApp";
import {Redirect, Switch} from "react-router";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

class App extends React.Component {
  handleError = (event) => {
    this.props.setError(event.reason.message)
  }

  componentDidMount() {
    this.props.appInitialization();
    window.addEventListener('unhandledrejection', this.handleError)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleError)
  }

  render() {
    if (!this.props.isAppInitialized) {
      return <PreloaderApp/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Sidebar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile"/>
            </Route>
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
              <div className="prototypePage">
                <News>News Page (just for test)</News>
              </div>
            </Route>
            <Route path="/music">
              <div className="prototypePage">
                <Music>Music Page (just for test)</Music>
              </div>
            </Route>
            <Route path="/settings">
              <div className="prototypePage">
                <Settings>Settings Page (just for test)</Settings>
              </div>
            </Route>
            <Route>
              <NotFoundPage/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAppInitialized: state.app.isAppInitialized,
  error: state.app.error
})

export default connect(mapStateToProps, {appInitialization, setError})(App);
