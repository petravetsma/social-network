import React from 'react';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.pageWrap}>
      <div><h2 className={style.code}>404</h2></div>
      <div className={style.text}>page not found</div>
    </div>
  )
}

export default NotFoundPage;
