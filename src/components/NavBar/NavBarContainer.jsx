import React from 'react';
import {connect} from "react-redux";
import NavBar from "./NavBar";
//
const mapStateToProps = (state) => {
    let copyState = {...state}
    return {
        mes: copyState.dialogsPage.messageData
    }
}

const NavBarContainer = connect(mapStateToProps) (NavBar);

export default NavBarContainer;
