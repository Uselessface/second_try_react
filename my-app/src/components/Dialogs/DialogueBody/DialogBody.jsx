import React from "react";
import styles from "./Dialogue_body.module.css";
import Message from "./Message";




let messageData = [
    {id : 1, message : "Реально хороший и понятный курс. надеюсь это сказать и в конце."}
    ,{ id: 2, message: "Спасибо!" }
]
let messageBody = messageData.map(content => <Message message_content={content.message} /> );


const DialogBody = (props) =>{
    return (
        <div className={styles.dialogue_body}>
            {messageBody}
        </div>
    );
}

export default DialogBody;