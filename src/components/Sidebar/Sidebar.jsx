import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  return (
    <nav className={s.sidebar}>
      <nav>
        <div><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
        <div><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
        <div><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
        <div><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
      </nav>
      <Friends friends={props.friends} />
    </nav>
  );
}

export default Sidebar;
