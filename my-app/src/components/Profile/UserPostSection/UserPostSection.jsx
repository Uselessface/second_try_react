import React from "react";
import styles from "./UserPostSection.module.css"
import NewPost from "../UserPosts/NewPost";
import SinglePost from "../UserPosts/SinglePost/SinglePost";

const UserPostSection = (props) => {
    return(
        <div className={styles.user_post_wrapper}>
            <NewPost/>
            <SinglePost like_count="15"
                        message="получайте уведомления о статусе ваших откликов в телеграме, вконтакте или вайбере"/>
            <SinglePost like_count="125" message="but then you realize that you dont have a webcam"/>
            <SinglePost like_count="5" message="когда видишь в ленте очередной нечитаемый пост из двух картинок"/>
        </div>
    );
}

export default UserPostSection;