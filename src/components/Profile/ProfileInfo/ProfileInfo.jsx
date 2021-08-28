import React from 'react';
import s from './ProfileInfo.module.css' ;
import img from "../../../img/bg.jpg";
import me from '../../../img/me.jpg'
import {Avatar} from "@material-ui/core";
import Loader from "../../loader/Loader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader/>
    } else {
        return (
            <div>
                <div className={s.content}>
                    <div>
                        <Avatar
                            style={{width: '100%', borderRadius: '0', minHeight: '150px'}}
                            src={img}
                            alt="bi"/>
                    </div>

                    <div className={s.description_block}>
                        <div className={s.boxImg}>
                            <Avatar
                                src={props.profile.photos.small === null ? 'https://yt3.ggpht.com/ytc/AAUvwnihIIjfolgDP46s4snHGuI9U1oY-gppxfU2l0YFNDc=s900-c-k-c0x00ffffff-no-rj' : props.profile.photos.large}
                                alt="men" style={{width: '260px', height: '260px', borderRadius: '0'}}/>
                            <div className={s.paper} style={{
                                maxWidth: '400px',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                    <h3>Name:</h3><span style={{marginLeft: '15px'}}>{props.profile.fullName}</span>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                    <h3>Sity:</h3><span style={{marginLeft: '15px'}}>Minsk</span></div>
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                    <h3>Age:</h3><span style={{marginLeft: '15px'}}>23</span></div>
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                    <h3>About me:</h3><span style={{marginLeft: '15px'}}>{props.profile.aboutMe}</span>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                    <h3>About search job:</h3><span
                                    style={{marginLeft: '15px'}}>{props.profile.lookingForAJobDescription}</span>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }

};

export default ProfileInfo;








