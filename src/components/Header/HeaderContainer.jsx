import React from 'react';

import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InAuthAC, SetUserDataAC, setMineDataInfoThunkCreator} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setMineDataInfoThunkCreator()
    }


    render() {

        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, {SetUserDataAC, setMineDataInfoThunkCreator})(HeaderContainer);
