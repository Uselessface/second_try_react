import React from "react";
import styles from "./DialogueList.module.css";
import DialogItem from "./DialogItem/DialogItem";

const DialogueList = (props) => {
    return(
        <div className={styles.dialogue_list}>
            <div className={styles.dialogues}>
                <DialogItem userName='Joseph Joestar' id="1"/>
                <DialogItem userName='Jonathan Joestar' id="2"/>
                <DialogItem userName='Jotaro kujo' id="3"/>
                <DialogItem userName='Johnny Joestar' id="4"/>
            </div>
        </div>
    );
}
export default DialogueList;