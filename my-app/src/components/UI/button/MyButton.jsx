import React from 'react';
import styles from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.my_btn}>
            {children}
        </button>
    );
};

export default MyButton;