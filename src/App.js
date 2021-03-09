import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar friends={props.state.sideBar.friends} />
        <div className="app-wrapper-content">
          <Route path="/dialogs">
            <Dialogs dialogPage={props.state.dialogPage}
                    dispatch={props.dispatch}/>
          </Route>
          <Route path="/profile">
            <Profile profilePage={props.state.profilePage}
                     dispatch={props.dispatch}/>
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
