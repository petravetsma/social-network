import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  const store = props.store;
  const dialogPage = store.getState().dialogPage;
  const changeInput = (message) => {
    store.dispatch(updateMessageTextActionCreator(message))
  }
  const addMessage = () => {
    store.dispatch(addMessageActionCreator())
  }
  return (
    <Dialogs dialogs={dialogPage.dialogs} messages={dialogPage.messages}
             newMessageText={dialogPage.newMessageText}
             changeInput={changeInput} addMessage={addMessage}/>
  );
}

export default DialogsContainer;
