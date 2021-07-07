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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;








