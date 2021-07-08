import React from 'react';
import s from './Profile.module.css' ;
import MyPosts from "./MyPosts/MyPosts";
import img from '../../img/bg.jpg' ;
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;








