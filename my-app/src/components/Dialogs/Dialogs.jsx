import React from "react";
import styles from "./Dialogs.module.css";
import DialogueList from "./DialogueList/DialogueList";
import DialogBody from "./DialogueBody/DialogBody";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {
    return (
        <div className={'section_wrapper'}>
            <h3 className={'section_header'}>
                Chats
            </h3>
            <div className={styles.dialogues_container}>
                <DialogueList friendsList={props.friendsList}/>
                <DialogBody messageData={props.messageData}/>
            </div>
            <div className={styles.new_message}>
                <NewMessage
                    sendMessage={props.sendMessage}
                    updateMessageValue={props.updateMessageValue}
                />
            </div>
        </div>
    )
}
export default Dialogs;