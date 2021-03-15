import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TextareaForm from "../Forms/TextareaForm/TextareaForm";

const Dialogs = (props) => {
  const usersElements = props.dialogs.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
  const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} from={m.from}/>)

  return (
    <div>
      <div className={style.dialogs}>
        <div>
          {usersElements}
        </div>
        <div>
          {messagesElements}
        </div>
      </div>
      <div>
        <div>
          <TextareaForm sendText={props.addMessage}/>
        </div>
      </div>
    </div>
  );
}



export default Dialogs;
