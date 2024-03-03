import React from 'react';
import styles from '../styles/Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink href="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink href="/dialogs">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink href="">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink href="">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink href="">Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
