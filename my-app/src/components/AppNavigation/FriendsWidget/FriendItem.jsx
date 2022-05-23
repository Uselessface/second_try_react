import React from "react";
import styles from "./FriendsWidget.module.css";

const FriendItem = (props) => {
    return (
        <li className={styles.friend_item}>
            <img src={props.avatar} alt="avatar"/>
            <p className={styles.name}>{props.name}</p>
        </li>
    );
}

export default FriendItem;