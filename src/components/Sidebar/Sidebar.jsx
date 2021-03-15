import React from 'react';
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  return (
    <nav className={style.sidebar}>
      <nav>
        <div><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink></div>
        <div><NavLink to="/users" activeClassName={style.active}>Users</NavLink></div>
        <div><NavLink to="/news" activeClassName={style.active}>News</NavLink></div>
        <div><NavLink to="/music" activeClassName={style.active}>Music</NavLink></div>
        <div><NavLink to="/settings" activeClassName={style.active}>Settings</NavLink></div>
      </nav>
      <Friends friends={props.friends} />
    </nav>
  );
}

export default Sidebar;
