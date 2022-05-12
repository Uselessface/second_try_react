import React from "react";
import SinglePostStyle from './SinglePostStyle.module.css';
import ProfileStyle from "../../Profile.module.css";

const SinglePost = (props) => {
    return (
    <div>
        <div className={SinglePostStyle.post_container}>
            <div className={SinglePostStyle.userAvatar}>
                <img src="https://99px.ru/sstorage/53/2020/10/mid_316610_252677.jpg" alt="" className={ProfileStyle.userAvatar__image}/>
            </div>
            <div className={SinglePostStyle.post_body}>
                <p className={SinglePostStyle.post_text}>{props.message}</p>
            </div>
        </div>
        <div className={SinglePostStyle.social_block}>
            <div className={SinglePostStyle.social_item}>
                <div className={`${SinglePostStyle.social_icon} ${SinglePostStyle.like_icon}`}></div>
                <div className={SinglePostStyle.social_counter}>{props.like_count}</div>
            </div>
        </div>
    </div>
    );
}
export default SinglePost;