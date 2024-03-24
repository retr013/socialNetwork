import React, {Component} from 'react';
import style from "../../styles/Dialogs/Message.module.css";

export default function Message(props) {
    return (
        <div className={style.message}>{props.message}</div>
    )

}
