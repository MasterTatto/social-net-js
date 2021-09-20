import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}
//
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (value) => {
            dispatch(addPostAC(value))
        }
    }
}
//
const MyPostsContainer = connect(mapStateToProps, {addPostAC})(MyPosts);


export default MyPostsContainer;








