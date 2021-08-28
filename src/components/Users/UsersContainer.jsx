import React from 'react';
import {connect} from "react-redux";
import {
    followAC, followingProgressAC,
    setCurrentPageAC,
    setToggleFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import s from './user.module.css'
import Loader from "../loader/Loader";
import {getUsers} from "../../api/api";

//

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                console.log(response)
                this.props.setToggleFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalCounts(response.totalCount)

            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.setToggleFetching(true)
        getUsers(p, this.props.pageSize)
            .then(response => {
                this.props.setToggleFetching(false)
                this.props.setUsers(response.items)

            })
    }

    render = () => {

        console.log(this.props)
        if (this.props.loader === false) {
            return <Users users={this.props.users}
                          totalUsers={this.props.totalUsers}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          unfollowUser={this.props.unfollowUser}
                          followUser={this.props.followUser}
                          loader={this.props.loader}
                          {...this.props}
                         
                         />
        } else {
            return (
                <div className={s.loader}>
                    <Loader/>
                </div>
            )
        }

    }
}

//
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsersCounts,
        currentPage: state.usersPage.currentPage,
        loader: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    followUser: followAC,
    unfollowUser: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalCounts: setTotalCountAC,
    setToggleFetching: setToggleFetchingAC,
    followingProgressAC: followingProgressAC
})(UsersContainer);
