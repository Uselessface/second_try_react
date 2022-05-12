import React from "react";
import UserPostStyle from './NewPost.module.css';

const NewPost = (props) =>{
    return(
        <div>
            <h3 className={UserPostStyle.header}>New Post</h3>
            <div className={UserPostStyle.new_post_container}>
                <textarea className={UserPostStyle.new_post} name="new_post"/>
                <button className={UserPostStyle.add_post}>Share your thoughts</button>
            </div>
            <hr/>
        </div>
    )
}

export default NewPost;