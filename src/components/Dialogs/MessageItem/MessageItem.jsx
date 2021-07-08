import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";



const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default MessageItem;
