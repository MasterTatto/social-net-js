import Dialogs from './Dialogs'
import {addMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

import React from "react";

import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)