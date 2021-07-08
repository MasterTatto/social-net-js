import React from 'react';
import s from './MyPosts.module.css' ;
import Post from "./Posts/Post";
import {Button, TextField} from "@material-ui/core";

const MyPosts = (props) => {


    //
    let postElement = props.postsData.map((p) => {
        return <Post messages={p.messages} likeCounts={p.likeCounts} key={p.id}/>
    })
    //
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField   id="filled-full-width"
                                 label="Post"
                                 placeholder="Add new post..."
                                 fullWidth
                                 margin="normal"
                                 InputLabelProps={{
                                     shrink: true,
                                 }}
                                 variant="outlined">

                    </TextField>
                </div>
                <div>
                    <Button style={{transition:'0.5s'}} className={s.btn_grad} variant="outlined" color="primary">Add post</Button>
                </div>
            </div>

            <div>
                {postElement}
                {/*<Post messages={'Hi,How are you'} likeCounts={15}/>*/}
                {/*<Post messages={'It\'s me first post'} likeCounts={23}/>*/}

            </div>
        </div>
    );
};

export default MyPosts;








