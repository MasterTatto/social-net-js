import React from 'react';
import s from './MyPosts.module.css' ;
import Post from "./Posts/Post";

const MyPosts = () => {

    let postsData = [
        {id:1,messages:'Hi,How are you',likeCounts:15},
        {id:2,messages:'It\'s me first post',likeCounts:23},
    ]

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div>
                {postsData.map((p) => {
                    return <Post messages={p.messages} likeCounts={p.likeCounts} key={p.id}/>
                })}
                {/*<Post messages={'Hi,How are you'} likeCounts={15}/>*/}
                {/*<Post messages={'It\'s me first post'} likeCounts={23}/>*/}

            </div>
        </div>
    );
};

export default MyPosts;








