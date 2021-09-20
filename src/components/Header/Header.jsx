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


const Header = (props) => {

    return (

        <header className={s.header}>
            <AppBar position="static">
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        <h2>{props.auth.inAuth ? props.auth.login : ''}</h2>
                    </Typography>
                    <NavLink to={'/login'} className={s.btn_login}
                    >{props.auth.inAuth ? 'Exit' : 'Login'}</NavLink>
                </Toolbar>

            </AppBar>
        </header>

    );
};

export default Header;
