import React from 'react';
import s from './Post.module.css' ;
import {Avatar} from "@material-ui/core";

const Post = (props) => {
    return (

        <div className={s.contentPost}>
            <div className={s.boxPost}>
                <Avatar
                    style={{width:'70px',height:'70px'}}
                    className={s.postImg}
                    src="https://www.wallpapers4u.org/wp-content/uploads/cat_autumn_skinny_walk_tired_51170_1920x1080.jpg"
                    alt=""/>
                <div className={s.infoBox}>
                <span className={s.span}>{props.messages}</span>
                <span className={s.like}>like {props.likeCounts}</span>
                </div>
            </div>
        </div>

    );
};

export default Post;








