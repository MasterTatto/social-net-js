import React, {useState} from 'react';
import {Avatar, Button, Paper, TextField} from "@material-ui/core";

import s from './user.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followUser, unfolowUser} from "../../api/api";

const Users = (props) => {

    const [value, setValue] = useState(null)
    const total = Math.ceil(props.totalUsers / props.pageSize)
    console.log(props)
    return (
        <div>
            <div className={s.count}>

                <Button variant="outlined" color="secondary" onClick={() => {
                    if (props.currentPage > 1) {
                        props.onPageChanged(props.currentPage - 1)
                    } else {
                        props.onPageChanged(1)
                    }
                }}>
                    back
                </Button>
                <span className={s.span}>{props.currentPage} / {total}</span>

                <TextField label={'Page number'} type="number" value={value}
                           onChange={(e) => setValue(e.currentTarget.value)}
                           onKeyPress={(e) => {
                               if (e.key === 'Enter') {
                                   props.onPageChanged(value)
                                   setValue('')
                               }

                           }
                           }
                />

                <Button variant="outlined" color="secondary"
                        onClick={() => {
                            if (props.currentPage < total) {
                                props.onPageChanged(+props.currentPage + 1)
                            } else {
                                props.onPageChanged(total)
                            }
                        }}>
                    next
                </Button>

            </div>

            <div className={s.box}>

                {
                    props.users.map((u) => {

                        return (

                            <Paper key={u.id} elevation={9} className={s.user_block}>
                                <div className={s.first}>
                                    <div className={s.photo}>

                                        <NavLink to={'/profile/' + u.id}><Avatar
                                            src={u.photos.small === null ? 'https://yt3.ggpht.com/ytc/AAUvwnihIIjfolgDP46s4snHGuI9U1oY-gppxfU2l0YFNDc=s900-c-k-c0x00ffffff-no-rj' : u.photos.small}
                                            alt="" style={{height: '70px', width: '70px'}}/></NavLink>
                                        <span>
                                <div className={s.name}>{u.name}</div>
                                <div>{u.status}</div>
                                 </span>
                                    </div>

                                    <div>
                                        {u.followed ?
                                            (<Button disabled={props.followingProgress.some(id => id === u.id)}
                                                     variant="outlined"
                                                     color="secondary"
                                                     onClick={() => {
                                                         props.followingProgressAC(true, u.id)

                                                         unfolowUser(u.id)
                                                             .then(response => {

                                                                 if (response.data.resultCode === 0) {
                                                                     props.unfollowUser(u.id)
                                                                 }
                                                                 props.followingProgressAC(false, u.id)
                                                             })
                                                     }}>
                                                UnFollow
                                            </Button>)
                                            :

                                            (<Button disabled={props.followingProgress.some(id => id === u.id)}
                                                     variant="outlined" color="primary"
                                                     onClick={() => {
                                                         props.followingProgressAC(true, u.id)
                                                         followUser(u.id)
                                                             .then(response => {

                                                                 if (response.data.resultCode === 0) {
                                                                     props.followUser(u.id)
                                                                 }
                                                                 props.followingProgressAC(false, u.id)
                                                             })
                                                     }}>
                                                Follow
                                            </Button>)
                                        }
                                    </div>

                                </div>

                                <div className={s.info}>
                            <span className={s.location}>
                                <div className={s.location_city}>{u.location ? u.location.city : 'Minsk'}</div>
                                <div className={s.location_country}>{u.location ? u.location.country : 'Belarus'}</div>
                            </span>
                                </div>
                            </Paper>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Users
