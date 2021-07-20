import React, {useState} from 'react';
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
// let addPost = (value) => {
//     props.store.dispatch(addPostAC(value))
//
// }
//     //console.log(props.store.getState().profilePage)
//     //
//
//     return (
//        <MyPosts addPost={addPost} postsData={props.store.getState().profilePage.postsData}/>
//     );
// };
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
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
console.log(MyPostsContainer)

export default MyPostsContainer;








