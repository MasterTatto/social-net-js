import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {setProfile, setUserProfile, setUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = 18380
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(answer => {
                this.props.setUserProfile(answer.data)
            })
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

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        }
    }
};
let WithURLData = withRouter(ProfileContainer)


export default connect(mapStateToProps, mapDispatchToProps)(WithURLData)








