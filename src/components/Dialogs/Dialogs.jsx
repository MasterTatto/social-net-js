import React, {useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Button, TextField} from "@material-ui/core";



const Dialogs = (props) => {
    //

    //
    const dialogsElement = props.dialogsPage.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    //

    //
    const messagesElement = props.dialogsPage.messageData.map((m) => {
        return <MessageItem message={m.message}/>
    })
    //
    const [value, setValue] = useState('')
    //
    let addMess = () => {
        props.addMessage(value)
        setValue('')
    }
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

                    <Button onClick={() => addMess()} style={{transition: '0.5s', marginLeft: '10px'}}
                            className={s.btn_grad} variant="outlined"
                            color="primary">Send</Button></div>
            </div>


        </div>


    );
};

export default Dialogs;
