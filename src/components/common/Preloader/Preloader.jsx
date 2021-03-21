import React from 'react';
import preloaderImg from './../../../assets/images/preloader.svg';
import style from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={style.preloaderWrap}>
      <img className={style.preloaderImg} src={preloaderImg} alt="preloading"/>
    </div>
  )
}

export default Preloader;
