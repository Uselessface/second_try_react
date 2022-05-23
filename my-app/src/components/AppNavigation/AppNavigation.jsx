import React from "react";
import styles from "./AppNavigation.module.css";
import {NavLink} from "react-router-dom";
import FriendsWidget from "./FriendsWidget/FriendsWidget";

const AppNavigation = (props) => {
    return (
        <div>
            <nav className={styles.appNav}>
                <ul className={styles.list}>
                    <li className={styles.item}><span className={styles.navigationIcon}/><NavLink
                        className={({isActive}) => (isActive ? styles.active : styles.link)}
                        to="/profile"> Profile</NavLink></li>
                    <li className={styles.item}><span className={styles.navigationIcon}/><NavLink
                        className={({isActive}) => (isActive ? styles.active : styles.link)}
                        to="/dialogs">Messages </NavLink></li>
                    <li className={styles.item}><span className={styles.navigationIcon}/><NavLink
                        className={({isActive}) => (isActive ? styles.active : styles.link)} to="/news">News</NavLink></li>
                    <li className={styles.item}><span className={styles.navigationIcon}/><NavLink
                        className={({isActive}) => (isActive ? styles.active : styles.link)} to="/music">Music</NavLink>
                    </li>
                    <li className={styles.item}><span className={styles.navigationIcon}/><NavLink
                        className={({isActive}) => (isActive ? styles.active : styles.link)}
                        to="/settings">Settings</NavLink></li>
                </ul>
            </nav>

            <FriendsWidget friends={props.friend} />
        </div>
    );
}

export default AppNavigation;