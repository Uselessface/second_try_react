import React from "react";
import styles from "./UserPostSection.module.css"
import NewPost from "../UserPosts/NewPost";
import SinglePost from "../UserPosts/SinglePost/SinglePost";


const UserPostSection = (props) => {
    let posts = props.postData.map(post => <SinglePost likes={post.likes} message={post.message} id={post.id}/>);
    return (
        <div className={styles.user_post_wrapper}>
            <NewPost/>
            {posts}
        </div>
    );

}

export default UserPostSection;