import React from "react";
import styles from './NewPost.module.css';


const NewPost = (props) => {
    return (
        <div>
            <h3 className={'section_header'}>New Post</h3>
            <div className={styles.new_post_container}>
                <textarea className={styles.new_post} name="new_post"/>
                <button className={styles.add_post}>Share your thoughts</button>
            </div>
            <hr/>
        </div>
    )
}

export default NewPost;