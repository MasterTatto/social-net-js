import React, {useEffect, useState} from 'react';
import s from './Header.module.css';


import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {logDOM} from "@testing-library/react";
import {InAuthAC, SetUserDataAC} from "../../redux/auth-reducer";


const Header = (props) => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/auth/me')
    //         .then(response => {
    //            dispatch(SetUserDataAC(response.data))
    //         })
    // }, [])
    const [clickItem, setClickItem] = useState(false)

    return (

        <header className={s.header}>
            <AppBar position="static">
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon onClick={() => {
                            !clickItem ? setClickItem(true) : setClickItem(false)
                        }}/>
                    </IconButton>
                    <Typography variant="h6">
                        <h2>{props.inAuth ? props.login : ''}</h2>
                    </Typography>
                    <NavLink to={'/login'} className={s.btn_login} onClick={() => props.inAuth ? props.InAuthAC(false) : props.InAuthAC(true)}>{props.inAuth ? 'Exit' : 'Login'}</NavLink>
                </Toolbar>

            </AppBar>
            {/*<img*/}
            {/*    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/1024px-S-Bahn-Logo.svg.png"*/}
            {/*    alt="logo"/>*/}
        </header>

    );
};

export default Header;
