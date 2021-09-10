import React, {useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Button, TextField} from "@material-ui/core";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    //

    console.log(props)
    //
    const dialogsElement = props.dialogsPage.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    //

    //
    const messagesElement = props.dialogsPage.messageData.map((m) => {
        return <MessageItem message={m.message} key={m.id}/>
    })
    //
    const [value, setValue] = useState('')
    //
    let addMess = () => {
        props.addMessage(value)
        setValue('')
    }


    if (!props.auth.inAuth) return <Redirect to={'/login'}/>


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
