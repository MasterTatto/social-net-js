import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {getUsersProfileThunkCreator, setProfile, setUserProfile, setUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from 'react-router-dom'
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = 18380
        }
        this.props.getUsersProfileThunkCreator(userID)

    }

    render() {
        if (!this.props.auth.inAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}/>

    };
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        auth: state.auth
    }

}


let WithURLData = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUsersProfileThunkCreator})(WithURLData)








