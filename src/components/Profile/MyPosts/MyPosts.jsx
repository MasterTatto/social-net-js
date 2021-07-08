import React, {useState} from 'react';
import s from './MyPosts.module.css' ;
import Post from "./Posts/Post";
import {Button, TextField} from "@material-ui/core";
import {v1} from "uuid";

const MyPosts = (props) => {

    const [value, setValue] = useState('')
    //
    let postElement = props.postsData.postsData.map((p) => {
        return <Post messages={p.messages} likeCounts={p.likeCounts} key={p.id}/>
    })
    //

//
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField id="filled-full-width"
                               label="Post"
                               placeholder="Add new post..."
                               fullWidth
                               margin="normal"
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               variant="outlined"
                               value={value}
                               onChange={(e) => setValue(e.currentTarget.value)}
                    >

                    </TextField>
                </div>
                <div>
                    <Button onClick={() => {
                        props.addPost(value)
                        setValue('')
                    }} style={{transition: '0.5s'}} className={s.btn_grad} variant="outlined" color="primary">Add
                        post</Button>
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








