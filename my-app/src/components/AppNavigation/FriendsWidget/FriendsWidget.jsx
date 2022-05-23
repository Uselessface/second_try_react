import React from "react";
import styles from "./FriendsWidget.module.css";
import FriendItem from "./FriendItem";

const FriendsWidget = (props) => {
    let friendItem = props.friends.map( item => <FriendItem id={item.id} name={item.name} avatar={item.avatar} />);
    return(
        <div className={styles.friends_widget}>
            <h4>Friends</h4>
            <ul className={styles.friends_container}>
                {friendItem}
            </ul>
        </div>
    )
}

export default FriendsWidget;