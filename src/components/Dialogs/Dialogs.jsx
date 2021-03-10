import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MyContext from "../../context";

const Dialogs = (props) => {
  const usersElements = props.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
  const messagesElements = props.messages.map(m => <Message message={m.message} from={m.from}/>)

  const onChangeInput = (event) => {
    props.changeInput(event.target.value);
  }
  const onAddMessage = () => {
    props.addMessage();
  }
  return (
    <div>
      <div className={s.dialogs}>
        <div>
          <MyContext.Consumer>
            {value => {return <div>{value}</div>}}
          </MyContext.Consumer>
        </div>
        <div>
          {usersElements}
        </div>
        <div>
          {messagesElements}
        </div>
      </div>
      <div>
        <div>
          <textarea value={props.newMessageText}
                    onChange={onChangeInput}
          />
        </div>
        <div>
          <button onClick={onAddMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
