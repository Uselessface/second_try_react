import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={styles.userBlock}>
            <div className={styles.userAvatarContainer}>
                <div className={styles.userAvatar}>
                    <img src="https://99px.ru/sstorage/53/2020/10/mid_316610_252677.jpg" alt=""
                         className={styles.avatar_image}/>
                </div>
            </div>
            <div className={styles.userInfo}>
                <ul className={styles.list}>
                    <li className={styles.userName}>Chad Chadson</li>
                    <li className={styles.item}>Birthday : <span className="property">20 April</span></li>
                    <li className={styles.item}>City : <span className="property">Keklifornia</span></li>
                    <li className={styles.item}>Education : <span
                        className="property">Sigma rule channels on Youtube</span>
                    </li>
                    <li className={styles.item}>Web Site : <span className="property">none</span></li>
                </ul>
            </div>
        </div>
    );
}
export default ProfileInfo;