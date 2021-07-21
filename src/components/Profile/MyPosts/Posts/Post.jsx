import React, {useState} from 'react';
import s from './Post.module.css' ;
import {Avatar} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';

const Post = (props) => {
    let [counter , setCounter] = useState(props.likeCounts)

    return (

        <div className={s.contentPost}>
            <div className={s.boxPost}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    className={s.postImg}
                    src="https://www.wallpapers4u.org/wp-content/uploads/cat_autumn_skinny_walk_tired_51170_1920x1080.jpg"
                    alt=""/>
                <div className={s.infoBox}>
                    <span className={s.span}>{props.messages}</span>
                    <span className={s.like}>
                    <FavoriteIcon className={s.heart} onClick={() => setCounter(++counter)}/> {counter}
                </span>
                </div>
            </div>
        </div>

    );
};

export default Post;








