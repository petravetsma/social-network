import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";



const reducers = combineReducers({
  dialogPage: dialogsReducer,
  profilePage: profileReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));
window._store_ = store;


export default store;
