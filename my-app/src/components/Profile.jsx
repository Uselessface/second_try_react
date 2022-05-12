import React from "react";
import ProfileStyle from './Profile.module.css';

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
                        <li className={ProfileStyle.item}>Birthday : <span className="prop">20 April</span> </li>
                        <li className={ProfileStyle.item}>City : <span className="prop">Keklifornia</span></li>
                        <li className={ProfileStyle.item}>Education : <span className="prop">Sigma rule channels on Youtube</span></li>
                        <li className={ProfileStyle.item}>Web Site : <span className="prop">none</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;