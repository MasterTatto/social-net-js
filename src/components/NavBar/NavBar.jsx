import React from 'react';
import s from './NavBar.module.css' ;

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a activeClassName={s.active} href={'#'}>Profile</a></li>
                <li className={`${s.item} ${s.active}`}><a href={'#'}>Messages</a></li>
                <li className={`${s.item} ${s.active}`}><a href={'#'}>News</a></li>
                <li className={`${s.item} ${s.active}`}><a href={'#'}>Music</a></li>
                <li className={`${s.item} ${s.active}`}><a href={'#'}>Settings</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
