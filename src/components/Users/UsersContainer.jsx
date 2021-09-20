import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    followingThunkCreator,
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    unFollowAC, unFollowThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import s from './user.module.css'
import Loader from "../loader/Loader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


//

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.onPageChangedThunkCreator(page, this.props.pageSize)
    }

    render = () => {
        if (this.props.loader === false) {
            return <Users users={this.props.users}
                          totalUsers={this.props.totalUsers}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          loader={this.props.loader}
                          followingThunkCreator={this.followingThunkCreator}
                          unFollowThunkCreator={this.unFollowThunkCreator}
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


export default compose(
    connect(mapStateToProps, {
        followUser: followAC,
        unfollowUser: unFollowAC,
        getUsersThunkCreator: getUsersThunkCreator,
        onPageChangedThunkCreator: onPageChangedThunkCreator,
        followingThunkCreator: followingThunkCreator,
        unFollowThunkCreator: unFollowThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)