import React, {useState} from 'react';
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

let addPost = (value) => {
    props.store.dispatch(addPostAC(value))

}
    //console.log(props.store.getState().profilePage)
    //

    return (
       <MyPosts addPost={addPost} postsData={props.store.getState().profilePage.postsData}/>
    );
};

export default MyPostsContainer;








