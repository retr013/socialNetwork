import React, {createRef} from 'react';
import style from '../../styles/Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem';
import Message from "./Message";

function Dialogs(props) {

    let textAreaRef = createRef()

    function messageSend () {
        let message = textAreaRef.current.value
        alert(message)
    }

    let dialogItems = props.state.dialogs.map(
        user => <DialogItem name={user.name} id={user.id}/>
    )

    let messagesItems = props.messages.messages.map(
        messageItem => <Message message={messageItem.message}/>
    )

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogItems }
            </div>
            <div className={style.messages}>
                { messagesItems }
            </div>
            <div className={style.textArea}>
                <textarea className={style.dialogTextArea} name="" ref={textAreaRef} cols="10" rows="3"></textarea>
                <button className={style.dialogTextButton} onClick={messageSend}>Send</button>
            </div>
        </div>
    )

}

export default Dialogs;
