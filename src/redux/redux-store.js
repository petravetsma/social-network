import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


const reducers = combineReducers({
  dialogPage: dialogsReducer,
  profilePage: profileReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
