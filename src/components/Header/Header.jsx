import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (

        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/1024px-S-Bahn-Logo.svg.png"
                alt="logo"/>
        </header>

    );
};

export default Header;
