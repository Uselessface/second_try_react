import React from "react";
import styles from './NewPost.module.css';


const NewPost = (props) => {

    let newPostArea = React.createRef();
    let addPost = () =>{
        props.addPost();


    }
    let updateValue = () => {
        let postContent = newPostArea.current.value;
        props.updatePostValue(postContent);
    }
    return (
        <div>
            <h3 className={'section_header'}>New Post</h3>
            <div className={styles.new_post_container}>
                <textarea onChange={updateValue} ref={newPostArea} className={styles.new_post} value={props.newPostText}/>
                <button onClick={addPost} className={styles.add_post}>Share your thoughts</button>
            </div>
            <hr/>
        </div>
    )
}

export default NewPost;