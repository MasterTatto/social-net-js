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
                    <Avatar
                        style={{width: '100%', borderRadius: '0', minHeight: '150px'}}
                        src={img}
                        alt="bi"/>
                </div>

                <div className={s.description_block}>
                    <div className={s.boxImg}>
                        <Avatar
                            src={me}
                            alt="men" style={{width: '260px', height: '260px', borderRadius: '0'}}/>
                        <div className={s.paper} style={{
                            maxWidth: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                <h3>Name:</h3><span style={{marginLeft: '15px'}}>Alex</span></div>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                <h3>Sity:</h3><span style={{marginLeft: '15px'}}>Minsk</span></div>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: '14px'}}>
                                <h3>Age:</h3><span style={{marginLeft: '15px'}}>23</span></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;








