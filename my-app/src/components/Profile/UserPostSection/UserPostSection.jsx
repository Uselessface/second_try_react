import React from "react";
import styles from "./UserPostSection.module.css"
import NewPost from "../UserPosts/NewPost";
import SinglePost from "../UserPosts/SinglePost/SinglePost";

let postData = [
    {id : 1, message : "получайте уведомления о статусе ваших откликов в телеграме, вконтакте или вайбере", likes: 15}
    ,{ id: 2, message: "but then you realize that you dont have a webcam" , likes: 120},
    {id: 3, message: "когда видишь в ленте очередной нечитаемый пост из двух картинок", likes: 3}
]
let posts = postData.map( post => <SinglePost likes={post.likes} message={post.message} id={post.id}/>);

const UserPostSection = (props) => {
    return(
        <div className={styles.user_post_wrapper}>
            <NewPost/>
            {posts}
        </div>
    );
}

export default UserPostSection;