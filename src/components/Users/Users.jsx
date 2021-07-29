import React, {useState} from 'react';
import {Avatar, Button, Paper} from "@material-ui/core";
import {v1} from "uuid";
import axios from "axios";
import s from './user.module.css'

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        } else {
            console.log('all good')
        }
    }
    render = () => {
        console.log(this.props)
        return (
            <div>
                {/*<Button variant="contained" color='secondary' onClick={this.getUsers} style={{width: '100%'}}>Show*/}
                {/*    Users</Button>*/}
                {
                    this.props.users.map((u) => {

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
                                                    onClick={() => this.props.unfollowUser(u.id)}>Follow</Button> :
                                            <Button variant="outlined" color="secondary"
                                                    onClick={() => this.props.followUser(u.id)}>UnFollow</Button>}
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
        );
    }
}

export default Users;
