import React from "react";
import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import ProfileStyle from "../../../Profile/ProfileInfo/ProfileInfo.module.css";

const DialogItem = (props) => {
    return (
        <div className={`${styles.dialogue}`}>
            <NavLink className={({isActive}) => (isActive ? styles.active : styles.inactive)}
                     to={"/dialogs/" + props.id}>
                <div className={styles.userAvatar}>
                    <img src={props.avatar} alt=""
                         className={ProfileStyle.avatar_image}/>
                </div>
                <p className={styles.user_name}>{props.name}</p>
            </NavLink>
        </div>
    );
}
export default DialogItem;