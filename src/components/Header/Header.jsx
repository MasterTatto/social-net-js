import React, {useState} from 'react';
import s from './Header.module.css';


import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


const Header = () => {

    const [clickItem, setClickItem] = useState(false)
    console.log(clickItem)
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
                        <h2>MasterTatto</h2>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar>
            {/*<img*/}
            {/*    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/1024px-S-Bahn-Logo.svg.png"*/}
            {/*    alt="logo"/>*/}
        </header>

    );
};

export default Header;
