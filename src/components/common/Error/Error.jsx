import React from 'react';
import style from './Error.module.css';
import errorIcon from '../../../assets/images/error-icon.png';

const Error = (props) => {
  return (
    <div className={style.errorWrap}>
    <div className={style.errorBlock}>
      <img className={style.errorIcon} src={errorIcon} alt="error triangle"/>
      <h3 className={style.errorHeading}>{props.errorHeading || 'Oh snap!'}</h3>
      <p className={style.errorText}>{props.errorText || 'Something went wrong'}</p>
      <button onClick={() => {
        props.setError(null);
        window.location.reload();
      }} className={style.errorBtn}>Dismiss</button>
    </div>
    </div>
  )
}

export default Error;
