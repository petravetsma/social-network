import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return <div>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

export default DialogItem;
