import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Button, TextField} from "@material-ui/core";


const Dialogs = (props) => {
    //

    //
    const dialogsElement = props.dialogs.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    //

    //
    const messagesElement = props.dialogs.messageData.map((m) => {
        return <MessageItem message={m.message}/>
    })
    //
    const [value, setValue] = useState('')
    //
    return (

        <div className={s.dialogs}>

            <div className={s.dialogs_item}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
                <div className={s.addBox}>
                    <TextField label="Write" variant="outlined" size={'small'} value={value}
                               onChange={(e) => setValue(e.currentTarget.value)}/>
                    <Button onClick={() => {
                        props.addMessage(value)
                        setValue('')
                    }} style={{transition: '0.5s', marginLeft: '10px'}}
                            className={s.btn_grad} variant="outlined"
                            color="primary">Send</Button></div>
            </div>


        </div>


    );
};

export default Dialogs;
