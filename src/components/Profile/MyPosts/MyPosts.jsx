import React from 'react';
import s from './MyPosts.module.css' ;
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>

            <div>
                <Post messages={'Hi,How are you'} likeCounts={15}/>
                <Post messages={'It\'s me first post'} likeCounts={23}/>

            </div>
        </div>
    );
};

export default MyPosts;








