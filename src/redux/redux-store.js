import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


const reducers = combineReducers({
  dialogPage: dialogsReducer,
  profilePage: profileReducer,
  sideBar: sidebarReducer
});

const store = createStore(reducers);

export default store;
