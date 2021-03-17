import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    height: '28px',
    fontSize: '0.6em',
    padding: '5px',
    marginLeft: '17px'
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <header className={style.header}>
      <div className={style.headerWrap}>
        <img src="https://static.vecteezy.com/system/resources/previews/001/187/487/non_2x/heart-logo-png.png"
             alt="logo"/>
        <h1>Social Network</h1>
      </div>
      <div className={style.user}>
        {props.auth.isAuth
          ? <div>
            <span>Hello, {props.auth.login}!</span>
            <Button className={classes.root} variant="contained" onClick={props.logout}>Log out</Button>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
