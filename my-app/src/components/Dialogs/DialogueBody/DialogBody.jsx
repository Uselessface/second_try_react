import React from "react";
import styles from "./Dialogue_body.module.css";
import Message from "./Message";


const DialogBody = (props) => {
    let messageBody = props.messageData.map(content => <Message message_content={content.message}/>);
    return (
        <div className={styles.dialogue_body}>
            {messageBody}
        </div>
    );
}

export default DialogBody;