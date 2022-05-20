import React from "react";
import styles from "./Dialogs.module.css";
import DialogueList from "./DialogueList/DialogueList";
import DialogBody from "./DialogueBody/DialogBody";

const Dialogs = (props) => {
    return (
        <div className={'section_wrapper'}>
            <h3 className={'section_header'}>
                Chats
            </h3>
            <div className={styles.dialogues_container}>
                <DialogueList dialogsData={props.dialogsData}/>
                <DialogBody messageData={props.messageData}/>
            </div>
        </div>
    )
}
export default Dialogs;