import React from "react";
import styles from './SinglePostStyle.module.css';
import ProfileStyle from "../../Profile.module.css";

const SinglePost = (props) => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.userAvatar}>
                    <img src="https://99px.ru/sstorage/53/2020/10/mid_316610_252677.jpg" alt=""
                         className={ProfileStyle.userAvatar__image}/>
                </div>
                <div className={styles.body}>
                    <p className={styles.text}>{props.message}</p>
                </div>
            </div>
            <div className={styles.social_block}>
                <div className={styles.social_item}>
                    <div className={`${styles.social_icon} ${styles.like_icon}`}></div>
                    <div className={styles.social_counter}>{props.like_count}</div>
                </div>
            </div>
        </div>
    );
}
export default SinglePost;