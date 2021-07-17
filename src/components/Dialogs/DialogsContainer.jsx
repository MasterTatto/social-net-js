import React, {useState} from 'react';
import Dialogs from './Dialogs'
import {addMessageAC} from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {

    let addMessage = (value) => {
        props.store.dispatch(addMessageAC(value))
    }


    return (
        <Dialogs addMessage={addMessage} state={props.store.getState()}/>
    );
};

export default DialogsContainer;
