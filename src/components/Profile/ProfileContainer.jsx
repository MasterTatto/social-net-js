import React from 'react';
import Profile from "./Profile";
import {getUsersProfileThunkCreator} from "../../redux/profile-reducer";
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

    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>

    };
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {getUsersProfileThunkCreator}),
    withAuthRedirect
)(ProfileContainer)






