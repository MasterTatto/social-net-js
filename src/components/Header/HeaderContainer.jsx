import React from 'react';

import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InAuthAC, SetUserDataAC} from "../../redux/auth-reducer";
import {setToggleFetchingAC} from "../../redux/users-reducer";
import {getUserData} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {

        getUserData()
            .then(response => {
                console.log(response)
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    this.props.SetUserDataAC(id, login, email)
                } else {
                    alert(response.messages)
                }

            })
    }


    render() {

        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return state.auth
}


export default connect(mapStateToProps, {SetUserDataAC, InAuthAC})(HeaderContainer);
