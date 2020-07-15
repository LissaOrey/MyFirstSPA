import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Messages';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
 
  let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messagesData.map(m => < Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
export default Dialogs;
