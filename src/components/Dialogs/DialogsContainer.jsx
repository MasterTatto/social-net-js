import Dialogs from './Dialogs'
import {addMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {

        dialogsPage: state.dialogsPage,
        auth: state.auth
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
