import React from "react";
import styles from "./DialogueList.module.css";
import DialogItem from "./DialogItem/DialogItem";


const DialogueList = (props) => {
    let userDialogItems = props.friendsList.map(item => <DialogItem name={item.name} id={item.id} avatar={item.avatar}/>);
    return (
        <div className={styles.dialogue_list}>
            {userDialogItems}
        </div>
    );
}
export default DialogueList;