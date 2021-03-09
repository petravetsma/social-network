import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://static.vecteezy.com/system/resources/previews/001/187/487/non_2x/heart-logo-png.png" alt="logo" />
      <h1>Social Network</h1>
    </header>
  );
}

export default Header;
