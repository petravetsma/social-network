import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useFormik} from 'formik';

const Dialogs = (props) => {
  const usersElements = props.dialogs.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
  const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} from={m.from}/>)

  const onAddMessage = (message) => {
    props.addMessage(message);
  }
  const formik = useFormik({
    initialValues: {
      messageText: '',
    },
    onSubmit: (values, {resetForm} ) => {
      onAddMessage(values.messageText);
      resetForm({values: ''});
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <textarea
              name="messageText"
              onChange={formik.handleChange}
              value={formik.values.messageText}
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Dialogs;
