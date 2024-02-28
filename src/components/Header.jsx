import React from 'react';
import style from '../styles/Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <img className={style.logo} src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/297px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423" alt=""/>
        </header>
    )
}

export default Header;