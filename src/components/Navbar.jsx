import React from 'react';
import styles from '../styles/Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink className={styles.itemLink} to="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={styles.itemLink} to="/dialogs">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={styles.itemLink} to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={styles.itemLink} to="">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={styles.itemLink} to="">Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
