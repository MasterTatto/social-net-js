import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = () => {
    //
    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Nasty'},
    ]
    //
    const dialogsElement = dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    //
    let messageData = [
        {id: 1, message: 'Hello'},
        {id: 1, message: 'Im here'},
        {id: 1, message: 'Wow'},
        {id: 1, message: 'How are you'}
    ]
    //
    const messagesElement = messageData.map((m) => {
        return <MessageItem message={m.message}/>
    })
    //
    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_item}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    );
};

export default Dialogs;
