import React from "react";
import styles from './NewMessage.module.css';


const NewMessage = (props) => {

    let newMessageArea = React.createRef();
    let newMessage = () => {
        let messageValue = newMessageArea.current.value;
        props.sendMessage(messageValue);
        newMessageArea.current.value = "";
    }
    return (
        <div>
            <div className={styles.new_message_container}>
                <textarea ref={newMessageArea} className={styles.new_message} name="new_Message"/>
                <button onClick={newMessage} className={styles.add_message}>Send</button>
            </div>
            <hr/>
        </div>
    )
}

export default NewMessage;