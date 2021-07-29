import React from 'react';
import {connect} from "react-redux";
import UsersFunction from "./UsersFunction";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
    }
}
//
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
