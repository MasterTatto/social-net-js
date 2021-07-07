import React from 'react';
import s from './Post.module.css' ;

const Post = () => {
    return (

        <div className={s.contentPost}>
            <div className={s.boxPost}>
                <img
                    className={s.postImg}
                    src="https://www.wallpapers4u.org/wp-content/uploads/cat_autumn_skinny_walk_tired_51170_1920x1080.jpg"
                    alt=""/>
                <div className={s.infoBox}>
                <span>Lorem ipsum dolor sit amet.</span>
                <span className={s.like}>like</span>
                </div>
            </div>
        </div>

    );
};

export default Post;








