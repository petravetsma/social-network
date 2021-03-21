import React from 'react';
import preloaderImg from './../../../assets/images/preloader.svg';
import style from './PreloaderApp.module.css';

const PreloaderApp = () => {
  return (
    <div className={style.preloaderWrap}>
      <img className={style.preloaderImg} src={preloaderImg} alt="preloading"/>
    </div>
  )
}

export default PreloaderApp;
