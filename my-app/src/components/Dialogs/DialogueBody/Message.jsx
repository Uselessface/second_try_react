import React from "react";
import styles from "./Dialogue_body.module.css";
import ProfileStyle from "../../Profile/ProfileInfo/ProfileInfo.module.css";

const Message = (props) => {
    return (
        <div className={`${styles.message} ${styles.incoming_message}`}>
            <div className={styles.userAvatar}>
                <img src="https://99px.ru/sstorage/53/2020/10/mid_316610_252677.jpg" alt=""
                     className={ProfileStyle.avatar_image}/>
            </div>
            <div className={styles.message_content}>
                {props.message_content}
            </div>
        </div>
    );
}

export default Message;