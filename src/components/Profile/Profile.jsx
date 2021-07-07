import React from 'react';
import s from './Profile.module.css' ;
import MyPosts from "./MyPosts/MyPosts";
import img from '../../img/bg.jpg' ;

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    style={{width: '100%', maxHeight: '300px'}}
                    src={img}
                    alt="bi"/>
            </div>
            <div>
                <div className={s.boxImg}>
                    <img src="https://www.facefull-news.com/wp-content/uploads/2967447b481b971d1ee66612febcc996.jpg"
                         alt="men" style={{maxWidth: '120px', borderRadius: '50px'}}/>
                </div>
                ava+desc
            </div>

            <MyPosts/>

        </div>
    );
};

export default Profile;








