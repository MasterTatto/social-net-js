import React from 'react';
import s from './ProfileInfo.module.css' ;
import img from "../../../img/bg.jpg";
import me from '../../../img/me.jpg'
import {Avatar} from "@material-ui/core";


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img
                        style={{width: '100%', maxHeight: '300px'}}
                        src={img}
                        alt="bi"/>
                </div>

                <div className={s.description_block}>
                    <div className={s.boxImg}>
                        <Avatar
                            src={me}
                            alt="men" style={{width: '130px', height: '130px'}}/>

                    </div>
                    ava+desc
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;








