import React, {useState} from 'react';
import {Avatar, Button, Paper, TextField} from "@material-ui/core";

import s from './user.module.css'

const Users = (props) => {
    const [value, setValue] = useState(null)
    const total = Math.ceil(props.totalUsers / props.pageSize)
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
                                props.onPageChanged(props.currentPage + 1)
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
                                        <Avatar
                                            src={u.photos.small === null ? 'https://yt3.ggpht.com/ytc/AAUvwnihIIjfolgDP46s4snHGuI9U1oY-gppxfU2l0YFNDc=s900-c-k-c0x00ffffff-no-rj' : u.photos.small}
                                            alt="" style={{height: '70px', width: '70px'}}/>
                                        <span>
                                <div className={s.name}>{u.name}</div>
                                <div>{u.status}</div>
                                 </span>
                                    </div>

                                    <div>
                                        {u.followed ?
                                            <Button variant="outlined" color="primary"
                                                    onClick={() => props.unfollowUser(u.id)}>Follow</Button> :
                                            <Button variant="outlined" color="secondary"
                                                    onClick={() => props.followUser(u.id)}>UnFollow</Button>}
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
export default Users;
