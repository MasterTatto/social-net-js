import React from 'react';
import s from './NavBar.module.css' ;
import {NavLink} from "react-router-dom";
import {Badge} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
import ReceiptSharpIcon from '@material-ui/icons/ReceiptSharp';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>

                <li className={`${s.item}`}>
                    <AccountBoxSharpIcon style={{
                         color: '#1f3bff'
                    }}/>
                    <NavLink className={s.link} activeClassName={s.active} to={'/profile'}>Profile</NavLink>
                </li>
                <li className={`${s.item}`}>
                    <Badge color="secondary" badgeContent={2}>
                        <MailIcon style={{color: '#1f3bff'}}/>
                    </Badge>
                    <NavLink className={s.link} activeClassName={s.active} to={'/dialogs'}>Messages</NavLink>
                </li>
                <li className={`${s.item}`}>
                    <ReceiptSharpIcon style={{color: '#1f3bff'}}/>
                    <NavLink className={s.link} activeClassName={s.active}
                             to={'/news'}>News</NavLink>
                </li>
                <li className={`${s.item}`}>
                    <MusicNoteSharpIcon style={{color: '#1f3bff'}}/>
                    <NavLink className={s.link} activeClassName={s.active}
                             to={'/music'}>Music</NavLink></li>
                <li className={`${s.item}`}>
                    <SettingsApplicationsSharpIcon style={{color: '#1f3bff'}}/>
                    <NavLink className={s.link} activeClassName={s.active}
                             to={'/settings'}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
