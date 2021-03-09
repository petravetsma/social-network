import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/state";



const Dialogs = (props) => {
  const newMessageTextarea = React.createRef();

  const usersElements = props.dialogPage.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
  const messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} from={m.from}/>)

  const changeInput = (event) => {
    props.dispatch(updateMessageTextActionCreator(event.target.value))
  }
  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }
  return (
    <div>
      <div className={s.dialogs}>
        <div>
          {usersElements}
        </div>
        <div>
          {messagesElements}
        </div>
      </div>
      <div>
        <div>
          <textarea value={props.dialogPage.newMessageText}
                    onChange={changeInput}
                    ref={newMessageTextarea}
                    name="new message"
                    id="new-message" cols="30" rows="10"
          />
        </div>
        <div>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
