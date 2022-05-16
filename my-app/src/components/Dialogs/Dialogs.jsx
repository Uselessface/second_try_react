import React from "react";
import styles from "./Dialogs.module.css";
import userStyles from ''
import ProfileStyle from "../Profile/Profile.module.css";


const Dialogs = (props) => {
    return(
        <div className={'section_wrapper'}>
            <h3 className={'section_header'}>
                Chats
            </h3>
            <div className={styles.dialog_container}>
                <div className={styles.dialogue_list}>
                    <ul className={styles.dialogues}>
                        <li className={styles.dialogue}>
                            <div className={styles.userAvatar}>
                                <img src="https://99px.ru/sstorage/53/2020/10/mid_316610_252677.jpg" alt=""
                                     className={ProfileStyle.userAvatar__image}/>
                            </div>
                            <p className={styles.user_name}></p>
                        </li>
                        <li className={styles.dialogue}>
                            <p className={styles.user_name}></p>
                        </li>
                        <li className={styles.dialogue}>
                            <p className={styles.user_name}></p>
                        </li>
                        <li className={styles.dialogue}>
                            <p className={styles.user_name}></p>
                        </li>
                        <li className={styles.dialogue}>
                            <p className={styles.user_name}></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;