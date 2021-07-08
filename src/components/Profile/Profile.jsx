import React from 'react';
import s from './Profile.module.css' ;
import MyPosts from "./MyPosts/MyPosts";
import img from '../../img/bg.jpg' ;
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let postsData = [
    {id: 1, messages: 'Hi,How are you', likeCounts: 15},
    {id: 2, messages: 'It\'s me first post', likeCounts: 23},
]
const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
};

export default Profile;








