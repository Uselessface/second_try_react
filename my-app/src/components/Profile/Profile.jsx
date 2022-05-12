import React from "react";
import ProfileStyle from './Profile.module.css';
import NewPost from "./UserPosts/NewPost";
import SinglePost from "./UserPosts/SinglePost/SinglePost";

const Profile = () =>{
    return(
        <div className={ProfileStyle.wrapper}>
            <div className={ProfileStyle.userBlock}>
                <div className={ProfileStyle.userAvatarContainer}>
                    <div className={ProfileStyle.userAvatar}>
                        <img src="https://99px.ru/sstorage/53/2020/10/mid_316610_252677.jpg" alt="" className={ProfileStyle.userAvatar__image}/>
                    </div>
                </div>
                <div className={ProfileStyle.userInfo}>
                    <ul className={ProfileStyle.list}>
                        <li className={ProfileStyle.userName }>Chad Chadson</li>
                        <li className={ProfileStyle.item}>Birthday : <span className="property">20 April</span> </li>
                        <li className={ProfileStyle.item}>City : <span className="property">Keklifornia</span></li>
                        <li className={ProfileStyle.item}>Education : <span className="property">Sigma rule channels on Youtube</span></li>
                        <li className={ProfileStyle.item}>Web Site : <span className="property">none</span></li>
                    </ul>
                </div>
            </div>
            <div className={ProfileStyle.user_post_wrapper}>
              <NewPost/>
              <SinglePost like_count = "15" message = "получайте уведомления о статусе ваших откликов в телеграме, вконтакте или вайбере" />
              <SinglePost like_count = "125" message = "but then you realize that you dont have a webcam" />
              <SinglePost like_count = "5" message = "когда видишь в ленте очередной нечитаемый пост из двух картинок" />
            </div>
        </div>
    );
}

export default Profile;