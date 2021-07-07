import React from 'react';
import s from './NavBar.module.css' ;
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></li>
                <li className={`${s.item} ${s.active}`}><NavLink activeClassName={s.active} to={'/dialogs'}>Messages</NavLink></li>
                <li className={`${s.item} ${s.active}`}><NavLink activeClassName={s.active} to={'/news'}>News</NavLink></li>
                <li className={`${s.item} ${s.active}`}><NavLink activeClassName={s.active} to={'/music'}>Music</NavLink></li>
                <li className={`${s.item} ${s.active}`}><NavLink activeClassName={s.active} to={'/settings'}>Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;
