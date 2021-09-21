import React from 'react';
import Profile from "./Profile";
import {
    getStatusUserThunkCreator,
    getUsersProfileThunkCreator,
    updateStatusUserThunkCreator
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = 18380
        }
        this.props.getUsersProfileThunkCreator(userID)

        this.props.getStatusUserThunkCreator(userID)
    }

    render() {
        console.log(this.props)
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatusUserThunkCreator}/>

    };
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {getUsersProfileThunkCreator, getStatusUserThunkCreator, updateStatusUserThunkCreator}),
    withAuthRedirect
)(ProfileContainer)






