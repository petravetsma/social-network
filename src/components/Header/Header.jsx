import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import icon from '../../assets/images/icon.svg';

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
  const history = useHistory();
  const routeChange = () =>{
    let path = `/login`;
    history.push(path);
  }

  const classes = useStyles();
  return (
    <header className={style.header}>
      <div className={style.headerWrap}>
        <img src={icon} alt="icon react"/>
        <h1>React network</h1>
      </div>
      <div className={style.user}>
        {props.auth.isAuth
          ? <div>
            <span>Hello, {props.auth.login}!</span>
            <Button className={classes.root} variant="contained" onClick={() => {
              props.logout(routeChange)
            }}>Log out</Button>
          </div>
          : <NavLink to={'/login'} className={style.buttonLink}><Button className={classes.root} variant="contained">Log in</Button></NavLink>}
      </div>
    </header>
  );
}

export default Header;
