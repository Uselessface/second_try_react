import React from "react";
import styles from "./DialogueList.module.css";
import DialogItem from "./DialogItem/DialogItem";

let dialogsData = [
    {id: 1, name: "Joseph Joestar"},
    {id: 2, name: 'Jonathan Joestar'},
    {id: 3, name: 'Jotaro kujo'},
    {id: 4, name: 'Johnny Joestar'}
]
let userDialogItems = dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);



const DialogueList = (props) => {
    return (
        <div className={styles.dialogue_list}>
            {userDialogItems}
        </div>
    );
}
export default DialogueList;