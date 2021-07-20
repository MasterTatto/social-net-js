import React, {useState} from 'react';
import Dialogs from './Dialogs'
import {addMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//
//     let addMessage = (value) => {
//         props.store.dispatch(addMessageAC(value))
//     }
//
//
//     return (
//         <Dialogs addMessage={addMessage} state={props.store.getState()}/>
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
//
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (value) => {
            dispatch(addMessageAC(value))
        }
    }
}
//
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
