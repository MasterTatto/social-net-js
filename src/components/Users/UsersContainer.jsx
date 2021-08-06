import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
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

//

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCounts(response.data.totalCount)

            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render = () => {
        if (this.props.loader === false) {
            return <Users users={this.props.users}
                          totalUsers={this.props.totalUsers}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          unfollowUser={this.props.unfollowUser}
                          followUser={this.props.followUser}
                          loader={this.props.loader}/>
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
        loader: state.usersPage.isFetching
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCounts: (totalUser) => {
            dispatch(setTotalCountAC(totalUser))
        },
        setToggleFetching: (fetch) => {
            dispatch(setToggleFetchingAC(fetch))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
