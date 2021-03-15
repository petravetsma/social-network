import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.headerWrap}>
        <img src="https://static.vecteezy.com/system/resources/previews/001/187/487/non_2x/heart-logo-png.png"
             alt="logo"/>
        <h1>Social Network</h1>
      </div>
      <div className={style.user}>
        {props.auth.isAuth ? <div>Hello, {props.auth.login}!</div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
